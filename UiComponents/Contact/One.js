import SectionOne from '../Section/One';
import { T, t, isRtl } from '../../Base/Globalization';
import { Input, Button, Icon } from '../Styles';
import React, { useState } from 'react';
import ProgressOne from '../ProgressOne';
import Error from '../Error';
import app from '../../Base/App';
import { CheckCircleIcon, ArrowSmLeftIcon } from '@heroicons/react/outline'
import Link from 'next/link';

const ContactOne = ({
    title,
    description,
    successMessage,
    contactItems,
    location
}) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [progress, setProgress] = useState(false);
    const [result, setResult] = useState();
    const [error, setError] = useState();

    const handleSubmit = (e) => {
        e.preventDefault()
        if (app.isNothing(name)) {
            setError('Please tell us your name.');
            return;
        }
        if (app.isNothing(email) && app.isNothing(phone)) {
            setError('Please provide either your email address, or your phone, so that we can reach back to you.');
            return;
        }
        if (app.isNothing(message)) {
            setError('Message is empty. Seems that you forgot to write your message.');
            return;
        }
        setProgress(true);

        let data = {
            name,
            email,
            phone,
            message
        }

        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            setProgress(false);
            if (res.status === 200) {
                setResult(successMessage);
                setName('')
                setEmail('')
                setPhone('')
                setMessage('')
            }
            else {
                console.log(res);
                setError(res.json());
            }
        })
    }

    return <>
        <SectionOne
            background="bg-gray-100"
        >
            <div
                className="max-w-screen-lg m-auto flex flex-col lg:grid lg:grid-cols-2"
            >
                <div className="">
                    <div className=" text-2xl font-bold uppercase tracking-wider mb-4  text-gray-800">
                        <T>{title}</T>
                    </div>
                    <div className="text-sm text-gray-600 lg:w-3/4">
                        <T>{description}</T>
                    </div>
                </div>
                <div className="mt-12 lg:mt-0">
                    {
                        result
                            ?
                            <div className="flex flex-col items-center bg-white rounded-lg p-6 py-12">
                                <CheckCircleIcon className="w-24 h-24 text-green-400" />
                                <span className="text-center text-xl font-medium mt-6 text-gray-600"><T>{result}</T></span>
                                <Link href="/">
                                    <a className="text-purple-800 text-lg cursor-pointer mt-12 block flex flex-row items-center">
                                        <ArrowSmLeftIcon className={Icon} />
                                        <span className="ml-4"><T>Back to home page</T></span>
                                    </a>
                                </Link>
                            </div>
                            :
                            <div>
                                <input className={Input + " w-full "} placeholder={t('Your name')} onChange={(e) => setName(e.target.value)} name='name' id='name' disabled={progress} />
                                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
                                    <input className={Input + " w-full"} placeholder={t('Your email')} onChange={(e) => setEmail(e.target.value)} name='email' id='email' disabled={progress} />
                                    <input className={Input + " w-full"} placeholder={t('Your phone')} onChange={(e) => setPhone(e.target.value)} name='phone' id='phone' type='tel' disabled={progress} />
                                </div>
                                <textarea className={Input + "w-full"} placeholder={t('Please write your message here.')} rows="10" onChange={(e) => setMessage(e.target.value)} disabled={progress}>

                                </textarea>
                                {
                                    progress
                                        ?
                                        <ProgressOne />
                                        :
                                        <button className={Button + " w-1/2"} onClick={(e) => handleSubmit(e)}>
                                            <T>Send</T>
                                        </button>
                                }
                                {
                                    error
                                        ?
                                        <Error>{error}</Error>
                                        :
                                        null
                                }
                            </div>
                    }
                </div>
            </div>
        </SectionOne>
        {
            contactItems
                ?
                <SectionOne
                    title={t('Contact Information')}
                    background="bg-purple-200"
                >
                    <div className="sm:grid sm:grid-cols-2 sm:gap-4 text-gray-900 xl:grid-cols-4">
                        {
                            contactItems.map((item, index) =>
                                <div>
                                    <PhoneIcon className={Icon} />
                                    <a href="tel:02634325834">02634325834</a>
                                </div>)
                        }
                    </div>
                </SectionOne>
                :
                null
        }
        {
            location
                ?
                <iframe
                    src={location}
                    className="w-full h-screen"
                    allowfullscreen=""
                    loading="lazy"></iframe>
                :
                null
        }
    </>
}

export default ContactOne;