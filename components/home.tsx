"use client"

import Image from "next/image";
import React from "react";
import HERO from "@/public/hero.png";
import { useRouter } from "next/navigation";

export function Home() {
	const router = useRouter();
	return (
		<>
			<div className='flex flex-row justify-around items-center mt-16 mx-16 bg-zinc-100 rounded-lg'>
				<div className='text-black'>
					<p className='text-4xl font-bold mb-2'>Welcome to MentorVIT</p>
					<p className='text-2xl font-semibold'>Connect. Guide. Grow</p>

					<p className='text-lg mt-2 font-thin'>
						Empower your journey with <strong>MentorVIT</strong>, the free alumni &
						faculty mentoring community
						<br /> for <strong>VIT Bhopal</strong> students
					</p>
					<button onClick={() => router.push("http://localhost:3000/invite/98e35cd0-ac43-426b-ba49-0104545d6092")} className='mt-2 bg-violet-500 hover:bg-violet-700/50 text-white font-bold py-2 px-4 rounded-lg'>
						Join the network!
					</button>
				</div>
				<Image src={HERO} alt='Logo' width={500} height={500} />
			</div>
			<hr className="h-0 my-4 bg-zinc-900" />
			<div className='p-4 mx-16 bg-zinc-100 rounded-lg'>
				<div className='text-black'>
					<p className='text-2xl font-bold mb-2'>Also introducing VIT ChatBot</p>
					<p className='text-xl font-semibold'>Get your info at finger tip in seconds⚡</p>
					<p className='text-xl font-light'>Get your academic, faculty, attendance and personal information without loggin in</p>
				</div>
			</div>
			<div className="flex justify-center items-center h-full p-2 px-16">

				<iframe src="https://web.powerva.microsoft.com/environments/Default-09bd1956-edda-4e9a-9543-7c7aa2cf4e81/bots/cr2a4_vitUjjwal/webchat?__version__=2" frameBorder="2" style={{ width: "100%", height: "100%" }}></iframe>
			</div>
			<hr className="h-1 my-4 bg-zinc-900" />
			<div className='p-4 mx-16 bg-zinc-100 rounded-lg'>
				<div className='text-black'>
					<p className="text-red-500">No Network Connection 📶 ⁉️</p>
					<p className='text-2xl font-bold mb-2'>Introducting VIT Ujjwal IVR</p>
					<p className='text-xl font-semibold'>Get all your academic, faculty, attendance and personal information ON CALL</p>
					<p className='text-xl font-light'>Call at <span className="font-bold">+1 9283251959</span>, anytime, anywhere without Internet!</p>
				</div>
			</div>
		</>
	);
}
