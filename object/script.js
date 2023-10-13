const libary = [
    {
      id: 1,
      title: "first book",
      author: "eren",
      status : {
        own: true,
        reading: false,
        red: false,
      }
    },
    {
      id: 2,
      title: "book",
      author: "pasten",
      status : {
        own: true,
        reading: false,
        red: false,
      }
    },
    {
      id: 3,
      title: "third book",
      author: "ahmet",
      status : {
        own: true,
        reading: false,
        red: false,
      }
    },
];

libary[0].status.red = true;
libary[1].status.red = true;
libary[2].status.red = true;

const { title: firstBook, author: firstAuthor } = libary[0];

const libaryJSON = JSON.stringify(libary);

console.log(libaryJSON);