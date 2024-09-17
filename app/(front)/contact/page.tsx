"use client";
import LinkButton from '@/components/linkButton';
import MainLayout from '@/components/mainLayout';
import React, { useState } from "react";
import ContactMap from './_components/contactMap';
import emailjs from 'emailjs-com';
import SendMail from '../email/page';
import { Button } from '@/components/ui/button';

function Contact() {


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        phone: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        emailjs
            .send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                formData,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            )
            .then(
                result => {
                    console.log(result.text);
                    alert('Email sent successfully!');
                },
                error => {
                    console.error(error.text);
                    alert('Failed to send email.');
                }
            );
    };

    return (
        <MainLayout backImage='comm2.jpg' image=''>
            <div className="">
                <div className="h-full py-8 my-8 w-full flex justify-center items-center">
                    <div className="h-full w-2/3 md:w-2/4 p-8 rounded-lg border border-red-500">
                        <p className="font-bold text-xl text-center py-2">Contact Us</p>
                        <form
                            onSubmit={sendEmail}
                            action="" className="">
                            <div className="flex flex-col mt-6 gap-4">
                                <div className="grid grid-cols-1 md:grid-cols-4  gap-4">
                                    <p className="font-bold text-sm col-span-1">Name</p>
                                    <input
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="bg-gray-100 py-2 px-4 rounded-lg w-full outline-none border-none col-span-3"

                                    />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-4  gap-4">
                                    <p className="font-bold text-sm col-span-1">Email</p>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="bg-gray-100 py-2 px-4 rounded-lg w-full outline-none border-none col-span-3" />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-4  gap-4">
                                    <p className="font-bold text-sm col-span-1">Phone Number</p>
                                    <input
                                        type="phone"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="bg-gray-100 py-2 px-4 rounded-lg w-full outline-none border-none col-span-3" />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-4  gap-4">
                                    <p className="font-bold text-sm col-span-1">Message</p>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="bg-gray-100 rounded py-2 px-4  w-full outline-none border-none col-span-3"
                                    ></textarea>
                                </div>
                                <div className="flex items-end">
                                    <Button
                                        type='submit'
                                        className='bg-red-600 hover:bg-bg-red-400'>Send Message</Button>
                                    {/* <LinkButton name={"Send message"} link={""} /> */}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center py-10">
                    <h1 className="text-2xl text-blue-600 font-semibold uppercase">
                        Where You Can Find Us
                    </h1>
                    <div>
                        {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.238405686132!2d31.091223209710314!3d-17.82435713330818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931bb255ddd6075%3A0x39ffae6e040af2f5!2s313%20A5%2C%20Harare!5e0!3m2!1sen!2szw!4v1704783507714!5m2!1sen!2szw"
              width="600"
              height="450"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe> */}
                    </div>
                </div>
                <ContactMap />
            </div>
        </MainLayout>
    );
}

export default Contact;
