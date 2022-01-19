```
<div 
    className="w-x h-x bg-cover bg-center" 
    style={{backgroundImage: item.image}}
>
```
```
<img
    className="w-x h-x object-cover object-center"
    src={item.image}
/>
```

- use `<img>` tag  
- specify width and height  
- use `object-cover`  
- if necessary, use `object-center` or ...  
- For IE,    
    - use `background-image` inline style   
    - then use `bg-cover` and `bg-center`