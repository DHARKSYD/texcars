import React, { useState } from 'react';
import { Form, Input, message } from 'antd';
import PhoneInput from 'react-phone-number-input';
import flags from 'react-phone-number-input/flags';
import 'react-phone-number-input/style.css';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { ASSETS } from '../assets';
import { RiMapPinLine } from 'react-icons/ri';

export default function Contact() {
  const [contactForm] = Form.useForm();
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('Nigeria');
  const GOOGLE_MAP = import.meta.env.VITE_GOOGLE_MAP;
  const SITEKEY = import.meta.env.VITE_CAPTCHA_SITEKEY;

  const handleSubmit = (values) => {
    console.log('Form values:', values);
    message.success('Message submitted successfully!');
  };

  return (
    <main className="space-y-10">
      <section className="relative px-4 h-[40vh] bg-primary">
        <img
          src={ASSETS['lambourghini_yellow_car']}
          alt="Contact Background"
          className="opacity-40 absolute top-0 left-0 h-full w-full object-cover object-center"
        />
      </section>

      <section className="py-5 px-4">
        <div className="container max-w-4xl mx-auto flex flex-col md:flex-row-reverse gap-3">
          <aside className="flex-1">
            <h3 className="text-xl md:text-2xl text-primary font-semibold">Our Office</h3>
            <div className="relative h-40 md:h-60 rounded-md bg-backdrop overflow-hidden">
              <iframe
                src={GOOGLE_MAP}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className=" flex flex-row p-2 md:p-4 text-primary">
              <div className="h-8 w-8 md:w-10 bg-backdrop rounded-full grid place-items-centre text-base md:text-lg text-secondary">
                <RiMapPinLine />
              </div>

              <div className="relative max-w-[14rem]">
                <h4 className="text-sm font-semibold">Our Address</h4>
                <p className="text-xs text-primary/70 font-semibold">
                  8,Sarakoro Str, Off Blantyre Crescent, Wuse 2, FCT-Abuja, Nigeria
                </p>
              </div>
            </div>
            <div className=" flex flex-row p-2 md:p-4 text-primary">
              <div className="h-8 w-8 md:w-9 md:h-9 bg-backdrop rounded-full grid place-items-centre text-base md:text-lg text-secondary">
                <RiMapPinLine />
              </div>

              <div className="relative max-w-[14rem]">
                <h4 className="text-sm font-semibold">Working Hours</h4>
                <p className="text-xs text-primary/70 font-semibold">Monday - Friday: 8:30AM - 4:00PM</p>
                <p className="text-xs text-primary/70 font-semibold">Saturday: 10:00AM - 2:00PM</p>
                <p className="text-xs text-primary/70 font-semibold">Sunday: Closed</p>
              </div>
            </div>
          </aside>

          <aside className="flex-1">
            <Form
              form={contactForm}
              layout="vertical"
              onFinish={handleSubmit}
              initialValues={{ country: 'Nigeria' }}
            >
              <Form.Item
                name="fullname"
                label="Full Name"
                rules={[{ required: true, message: 'Full Name is required' }]}
              >
                <Input placeholder="David Benjamin" />
              </Form.Item>

              <Form.Item
                name="email"
                label="Email"
                rules={[
                  {
                    required: true,
                    type: 'email',
                    message: 'Valid Email is required',
                  },
                ]}
              >
                <Input placeholder="david.benjamin@example.com" />
              </Form.Item>

              <Form.Item
                label="Phone Number"
                required
                validateStatus={!phone || phone.length < 10 ? 'error' : ''}
                help={!phone || phone.length < 10 ? 'Enter a valid phone number' : ''}
              >
                <PhoneInput
                  placeholder="Enter your phone number"
                  defaultCountry="NG"
                  value={phone}
                  onChange={setPhone}
                  international
                  countryCallingCodeEditable={false}
                  flags={flags}
                  className="w-full py-1 px-4 border border-slate-200 rounded-md"
                />
              </Form.Item>

              <Form.Item label="Country" required>
                <CountryDropdown
                  value={country}
                  onChange={(value) => {
                    contactForm.setFieldValue('country', value);
                    setCountry(value);
                  }}
                  className="w-full py-1 px-4 border border-slate-200 rounded-md"
                />
              </Form.Item>

              <Form.Item
                name={'region'}
                label={'State/Region'}
                rules={[{ required: true, message: 'Region is required' }]}
                children={
                  <RegionDropdown
                    country={country}
                    onChange={(value) => contactForm.setFieldValue('region', value)}
                    className="w-full py-1 px-4 border border-slate-200 rounded-md"
                  />
                }
              />

              <Form.Item
                name="message"
                label="Message"
                rules={[{ required: true, message: 'Message is required' }]}
              >
                <Input.TextArea
                  rows={4}
                  placeholder="Enter your message"
                  className="w-full py-1 px-4 border border-slate-200 rounded-md"
                />
              </Form.Item>

              <div className="g-recaptcha" data-sitekey={SITEKEY}></div>
              <button
                type="submit"
                className="px-6 py-2 rounded-lg bg-primary text-white font-semibold w-max cursor-pointer flex items-center gap-2"
              >
                Submit
              </button>
            </Form>
          </aside>
        </div>
      </section>
    </main>
  );
}
