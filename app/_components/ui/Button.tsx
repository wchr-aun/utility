import { MouseEventHandler } from "react";

export default function Button(props: {
  title: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  theme?: "default" | "danger";
  disabled?: boolean;
}) {
  const buttonTheme = {
    default:
      "text-gray-900 focus:outline-none bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700",
    danger:
      "bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:bg-red-700 dark:hover:bg-red-900 dark:focus:ring-red-400",
  };

  return (
    <button
      disabled={props.disabled}
      onClick={props.onClick}
      type="button"
      className={`py-2.5 px-5 m-1 w-1/8  cursor-pointer text-sm font-medium rounded-lg ${buttonTheme[props.theme || "default"]} disabled:cursor-not-allowed disabled:opacity-50`}
    >
      {props.title}
    </button>
  );
}
