import { DisclosureButton } from "@headlessui/react";
import { BellIcon } from "@heroicons/react/16/solid";
import { AccountMenuProps } from "../AccountMenu";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
export default function AccountMenuMobile(props: AccountMenuProps) {
  return (
    <>
      <div className="border-t border-gray-700 pb-3 pt-4">
        <div className="flex items-center px-5 sm:px-6">
          <div className="shrink-0">
            <img alt="" src={user.imageUrl} className="size-10 rounded-full" />
          </div>
          <div className="ml-3">
            <div className="text-base font-medium text-white">{user.name}</div>
            <div className="text-sm font-medium text-gray-400">
              {user.email}
            </div>
          </div>
          <button
            type="button"
            className="relative ml-auto shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            <span className="absolute -inset-1.5" />
            <span className="sr-only">View notifications</span>
            <BellIcon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="mt-3 space-y-1 px-2 sm:px-3">
          {props.userNavigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </div>
    </>
  );
}
