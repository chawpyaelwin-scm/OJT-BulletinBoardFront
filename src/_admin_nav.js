export default {
  items: [
    {
      title: true,
      class: "",
      wrapper: {
        element: "",
        attributes: {}
      }
    },
    {
      name: "book",
      url: "/book",
      icon: "icon-cursor",
      children: [
        {
          name: "Book List",
          url: "/book/booklist"
        }
      ]
    },
    {
      name: "author",
      url: "/author",
      icon: "icon-cursor",
      children: [
        
        {
          name: "Author List",
          url: "/author/authorlist"
        }
      ]
    },
    {
      name: "cart",
      url: "/cart",
      icon: "icon-cursor",
      children: [
        {
          name: "Cart List",
          url: "/cart/cartlist"
        }
      ]
    },
    {
      name: "genre",
      url: "/genre",
      icon: "icon-cursor",
      children: [
        {
          name: "Genre List",
          url: "/genre/genrelist"
        }
      ]
    },
  ]
};