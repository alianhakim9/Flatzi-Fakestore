"use client";

export default function EmptyState({ icon, title, subTitle, className }) {
  return (
    <div
      className={`flex flex-col gap-1 items-center justify-center ${className}`}
    >
      {icon}
      <h4 className="font-semibold text-2xl">{title}</h4>
      <p className="text-sm text-gray-400 text-center">{subTitle}</p>
    </div>
  );
}
