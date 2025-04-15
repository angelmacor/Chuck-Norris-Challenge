"use client";

import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { ThemeToggle } from "./ThemeToggle";
import { icons } from "lucide-react";
import { ClientOnly } from "./ClientOnly";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export const SidebarNavigation = () => {

  const items = [
    {
      title: "Home",
      url: "/#",
      icon: icons.House,
    },
    {
      title: "Favorites",
      url: "/favorites",
      icon: icons.Star,
    },
  ];

  return (
    <Sidebar>
      <SidebarHeader className="mb-6 text-lg font-semibold tracking-tight">
        <>
           <div className="flex items-center" >
            <Avatar className="m-2">
              <AvatarImage src="/chuck-norris.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            Chuck Norris Jokes
          </div>
        </>
      </SidebarHeader>


      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="absolute bottom-2 right-2" >
        <ClientOnly>
          <ThemeToggle />
        </ClientOnly>
      </SidebarFooter>
    </Sidebar>
  );
};
