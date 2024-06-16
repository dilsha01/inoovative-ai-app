import React, { useState } from 'react';
import styles from "../style";
import { robot } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  const [active, setActive] = useState('');

  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      {/* Separation Line at the Beginning */}
      <hr className="border-t-[1px] border-[#3F3E45] w-full mb-8" />

      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-[1] flex flex-col justify-start mr-10">
          <div>
            <p className="mt-2 font-poppins font-semibold text-3xl text-white flex items-center">
              <img src={robot} alt="logo" className="w-[32px] h-[32px] mr-2" />
              TechTro AI Solutions
            </p>
          </div>
          <p className={`${styles.paragraph} mt-4 max-w-[312px] flex items-center`}>
            Address : 284, Moratuwa, Sri Lanka. <br /> Contact no : +94 76 152 698
          </p>
        </div>

        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerlink) => (
            <div key={footerlink.title} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
              <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                {footerlink.title}
              </h4>
              <ul className="list-none mt-4">
                {footerlink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`font-poppins font-normal text-[16px] leading-[24px] ${
                      active === link.name ? "text-dimWhite" : "text-white"
                    } hover:text-secondary cursor-pointer ${
                      index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                    onClick={() => setActive(link.name)}
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Copyright Information without Separation Line */}
      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
          Copyright Ⓒ 2024 TechTro AI Solutions. All Rights Reserved.
        </p>

        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
              onClick={() => window.open(social.link)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
