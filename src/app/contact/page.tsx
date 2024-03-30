'use client'
import React from 'react';
import { Meteors } from '@/components/ui/meteors'; // Adjust the import path based on your project structure

function ContactUsPage() {
    return (
      <div className="relative min-h-screen bg-black text-white">
        {/* Meteors animation */}
        <Meteors number={100} className="absolute inset-0 z-0" />
  
        {/* Page content */}
        <div className="flex justify-center items-center pt-40">
          <div className="max-w-4xl mx-auto px-6 py-12">
            <h1 className="text-5xl font-bold mb-8 text-shadow-lg mt-100">Contact Us</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-semibold mb-4">Send us a Message</h2>
                <form>
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-lg font-medium">Name</label>
                    <input type="text" id="name" name="name" className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 text-black" />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-lg font-medium">Email</label>
                    <input type="email" id="email" name="email" className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 text-black" />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-lg font-medium">Message</label>
                    <textarea id="message" name="message" rows="4" className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 text-black"></textarea>
                  </div>
                  <button type="submit" className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500">Send Message</button>
                </form>
              </div>
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-semibold mb-4">Contact Information</h2>
                <ul>
                  <li className="mb-2 text-lg">
                    <span className="font-semibold">Email:</span> example@example.com
                  </li>
                  <li className="mb-2 text-lg">
                    <span className="font-semibold">Phone:</span> +1234567890
                  </li>
                  <li className="mb-2 text-lg">
                    <span className="font-semibold">Address:</span> 123 Main St, City, Country
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
export default ContactUsPage;
