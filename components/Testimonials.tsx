import Image from 'next/image';
import React from 'react';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsCheckCircleFill } from "react-icons/bs";
import avatarImg  from "../public/avatarImg.svg"

const testimonials = [
    {
        name: "Jessica Devis",
        username: "@jessicadevis",
        avatar: avatarImg.src,
        text: "The utility-first approach and extensive component library make it a breeze to create beautiful and responsive interfaces.",
        date: "Jan 17, 2024",
    },
    {
        name: "Mary Joshiash",
        username: "@maryjoshiash",
        avatar: "https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
        text: "It's like having a superpower in your toolkit. The ability to craft custom designs quickly and efficiently with simple classes is unparalleled.",
        date: "Jan 18, 2024",
    },
    {
        name: "Marcell Glock",  
        username: "@MarcelGlock",
        avatar: "https://img.freepik.com/premium-photo/elevate-your-brand-with-friendly-avatar-that-reflects-professionalism-ideal-sales-managers_1283595-18531.jpg",
        text: "The utility-first approach and extensive component library make it a breeze to create beautiful and responsive interfaces.",
        date: "Jan 19, 2024",
    },
];

function Testimonials() {
    return (
        <section className="pt-[250px] pb-20">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white">Think about us</h2>
                <p className="text-brown-50 mt-2">
                    That&apos;s the main thing people are controlled by! Thoughts - their perception of themselves!
                </p>
            </div>

            <div className="flex justify-center gap-14 pt-10 flex-wrap">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-[320px] bg-white rounded-lg shadow-lg p-6">
                        <div className="flex items-center gap-4 mb-4">
                            <Image
                                src={testimonial.avatar}
                                width={48}
                                height={48}
                                alt={testimonial.name}
                                className="w-12 h-12 rounded-full"
                            />
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-1">
                                    {testimonial.name} <BsCheckCircleFill className="text-blue-500" size={16} />
                                </h3>
                                <p className="text-gray-500">{testimonial.username}</p>
                            </div>
                        </div>
                        <p className="text-gray-700 mb-4">{testimonial.text}</p>
                        <div className="flex justify-between items-center text-gray-400">
                            <div className="flex items-center gap-1">
                                <span>See on</span>
                                <AiOutlineCloseCircle size={18} className="text-gray-400 cursor-pointer" />
                            </div>
                            <p className="text-gray-500 text-sm">{testimonial.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Testimonials;
