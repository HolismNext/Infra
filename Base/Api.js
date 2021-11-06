import axios from "axios"

const axiosApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL
})

axiosApi.interceptors.request.use(config => {
  config.headers['Content-Type'] = 'application/json';
  config.headers['Accept'] = 'application/json';
  config.headers['X-Client'] = 'React';
  // if (localStorage && localStorage.getItem('locale')) {
  //   config.headers['Locale'] = localStorage.getItem('locale');
  // }
  console.log('Starting Request', JSON.stringify(config, null, 2))
  console.log(process.env.NEXT_PUBLIC_API_URL);
  return config;
});

axiosApi.interceptors.response.use(
  response =>
    response
  ,
  error => {
    if (error.response === undefined) {
      throw new Error(error.message ? error.toString() : 'Unknown error');
    }
    if (error.response.status === 404) {
      throw new Error('404\nService does not exist');
    }
    if (error.response.status === 400 || error.response.status === 500) {
      var messages = '';
      var data = error.response.data;
      if (typeof data !== "string") {
        for (var item in error.response.data) {
          if (Array.isArray(data[item])) {
            for (var i = 0; i < data[item].length; i++) {
              messages += data[item][i] + "\n";
            }
          }
          else if (typeof data[item] === 'object') {
            console.log(data[item]);
          }
          else {
            messages += data[item] + "\n";
          }
        }
      }
      else {
        messages = data;
      }
      console.log(messages);
      throw new Error(messages);
    }
  }
)

export async function get(url) {
  return await
    axiosApi.get(url, {
      crossDomain: true
    }).then(response => {
      return response?.data;
    })
}

export async function post(url, data) {
  return await axiosApi
    .post(url, { ...data })
    .then(response => response?.data);
}