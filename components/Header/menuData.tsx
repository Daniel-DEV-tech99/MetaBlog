import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Blog",
    path: "/blog",
    newTab: false,
  },
  {
    id: 3,
    title: "Single Post",
    path: "/post-details",
    newTab: false,
  },
  {
    id: 4,
    title: "Pages",
    newTab: false,
    submenu: [
   
      {
        id: 43,
        title: "Blog Grid Page",
        path: "/blog",
        newTab: false,
      },
      {
        id: 45,
        title: "Single Post",
        path: "/post-details",
        newTab: false,
      },
  
      {
        id: 48,
        title: "Error Page",
        path: "/error",
        newTab: false,
      },
       {
        id: 49,
        title: "Author",
        path: "/author-profile",
        newTab: false,
      },
    ],
    
  },
  {
    id: 3,
    title: "Author",
    path: "/author-profile",
    newTab: false,
  },
];
export default menuData;
