"use client";

export default function Card({ icon, title, subtitle, className }) {
  return (
    <div
      className={`rounded-md border border-gray-100 px-4 py-2 flex gap-2 text-sm ${className} items-center`}
    >
      {icon}
      <div className="flex flex-col">
        <p>{title}</p>
        <p className="text-[8pt] text-gray-400">{subtitle}</p>
      </div>
    </div>
  );
}
