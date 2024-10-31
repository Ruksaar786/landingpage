import React from "react";
import Link from "next/link";

const Apply = () => {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[6rem] bg-[#f9f9f9] text-2xl">
      <div className="bg-pink-50 p-4" id="how-to-apply">
        <h1 className="h1-bold mb-4 text-green-600 ">
          <span className="text-center text-5xl mb-7 py-10 ">
            How to Apply for Our
          </span>
          <span className="font-bold first-line:text-center text-5xl  py-10">
            {" "}
            MERN stack Web Development Course
          </span>
        </h1>
        <h2 className="font-semibold text-2xl mb-6">
          <p className="mt-5 py-10">
            The course is available in Three different formats
          </p>
        </h2>
        <ul className="list-disc mb-4 space-y-2 px-8">
          <li>
            Choose the format that best fits your preferred way of learning.
          </li>
          <li>Create an account by clicking the New Account button.</li>
          <li>
            Watch our
            <a
              className="hover:text-red-600 font-semibold border-b-2 border-green-600"
              href="/demo"
            >
              Free videos.
            </a>
          </li>
          <li>
            After making your final decision about which format you choose, you
            can proceed with the payment.You must be logged in to access your
            Dashboard, Click on Bank Details, Instructions will be available in
            your
            <a
              className=" border-b-2 hover:border-b-2 hover:text-red-600"
              href="/dashboard"
            >
              Dashboard
            </a>
            .
          </li>
          <li>
            When making a payment at your bank by EFT, you must use your student
            ID as the unique reference number, which you will find in your
            Dashboard.
          </li>
          <li>
            Send an email with the attached payment slip. Please mention your
            Student ID in the subject line, which is available in your
            Dashboard.
          </li>
          <li>
            Update your profile. This information will be used for generating
            your course completion certificate.
          </li>
          <li>
            We will add you to our chat group where you will find all further
            instructions.
            <a
              href="https://discord.com/"
              className="border-b-2 hover:text-red-600"
              target="_blank"
            >
              Discord for download
            </a>
          </li>
          <li>
            Please read the
            <button className="inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 underline-offset-4 hover:underline h-9 rounded-md px-3 text-red-600 font-semibold text-lg">
              <a href="/faq">FAQ</a>
            </button>
            page.
          </li>
          <li>
            For any queries, you can write to us via email at
            <b>info@velisaafrica.co.za</b>
          </li>
          <li>
            In the introduction video, we will explain how to follow the course.
            <a
              className="hover:text-red-600 font-semibold border-b-2 border-green-600"
              href="/videos"
            >
              Introduction video.
            </a>
          </li>
          <li>
            Note: During the className, students microphones will be muted. For
            any questions, students can ask in the Discord chat. During the next
            session, we will answer the asked questions, or we might upload a
            video with the explanation.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Apply;
