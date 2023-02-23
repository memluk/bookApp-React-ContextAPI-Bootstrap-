import React from "react";

// 1. Create a context
export const BookContext = React.createContext();

// 2. Create a class to define the state and  the data
class BookContextProvider extends React.Component {

  // 3. Define state by giving the data
  state = {
    books : [
      {      
        title: "Don Quixote",
        author: "Miguel de Cervantes",
        year: 165,
        selling: "500 Mil.",
        imageURL: "https://kbimages1-a.akamaihd.net/4751e5d4-13de-4372-955c-ccde274a6d20/1200/1200/False/don-quixote-47.jpg",
        topic: "Don Quixote is a classic novel from 1605 which portraits the life and insightful journey of Don Quixote de la Mancha, a Spanish man who seems to be losing his mind on his quest to become a knight and restore chivalry alongside with a farmer named Sancho Panza, with whom he fights multiple imaginary enemies and faces a series of fantastic challenges."
      },
      {      
        title: "A Tale of Two Cities",
        author: "Charles Dickens",
        year: 1859,
        selling: "200 Mil.",
        imageURL: "https://secure.syndetics.com/index.aspx?type=xw12&client=719-531-6333&upc=&oclc=&isbn=9780679420736/LC.JPG",
        topic: "Lucie Manette had been separated from her father for eighteen years while he languished in Paris's most feared prison, the Bastille. Finally reunited, the Manettes's fortunes become inextricably intertwined with those of two men, the heroic aristocrat Darnay, and the dissolute lawyer, Carton. Their story, which encompasses violence, revenge, love and redemption, is grippingly played out against the backdrop of the terrifying brutality of the French Revolution."
      },
      {      
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        year: 1937,
        selling: "150 Mil.",
        imageURL: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1566425108l/33.jpg",
        topic: "Frodo, a hobbit, is entrusted with a powerful, legendary ring in order to travel across the world and throw it into Mount Doom in the hopes of destroying it before the evil Sauron catches him and takes the ring for himself."
      },
      {      
        title: "The Little Prince",
        author: "Antoine de Saint-Exupery",
        year: 1943,
        selling: "142 Mil.",
        imageURL: "https://m.media-amazon.com/images/I/61YFy1Ik0lL._AC_UF894,1000_QL80_.jpg",
        topic: "A pilot crashes in the Sahara Desert and encounters a strange young boy who calls himself the Little Prince. The Little Prince has traveled there from his home on a lonely, distant asteroid with a single rose. The story that follows is a beautiful and at times heartbreaking meditation on human nature."
      },
      {      
        title: "Harry Potter and the Sorcerer’s Stone",
        author: "J.K. Rowling",
        year: 1997,
        selling: "107 Mil.",
        imageURL: "https://m.media-amazon.com/images/I/71-++hbbERL.jpg",
        topic: "The book is about 11 year old Harry Potter, who receives a letter saying that he is invited to attend Hogwarts, school of witchcraft and wizardry. He then learns that a powerful wizard and his minions are after the sorcerer’s stone that will make this evil wizard immortal and undefeatable. Harry decides to go after the sorcerer’s stone before the wizard reaches it, but his loyal friends, Hermione and Ron don’t let Harry face this danger alone."
      },
      {      
        title: "And Then There Were None",
        author: "Agatha Christie",
        year: 1939,
        selling: "100 Mil.",
        imageURL: "https://m.media-amazon.com/images/I/41-yT675QKL.jpg",
        topic: "Ten houseguests, trapped on an isolated island, are the prey of a diabolical killer. A famous nursery rhyme is framed and hung in every room of the mansion: Ten little Indian boys went out to dine; One choked his little self and then there were nine ... When they realize that murders are occurring as described in the rhyme, terror mounts. Who has choreographed this dastardly scheme? And who will be left to tell the tale?"
      },
      {      
        title: "The Dream of the Red Chamber",
        author: "Cao Xueqin",
        year: 1791,
        selling: "100 Mil.",
        imageURL: "https://kbimages1-a.akamaihd.net/b5a5e150-e8ce-42c6-bb2c-3ecfb00266e8/353/569/90/False/the-dream-of-the-red-chamber-12.jpg",
        topic: "The son of a wealthy, noble family is born with a magic stone in his mouth. A darling and admirer of all the women and girls in the household, he rebels against his stern father and the social barriers of the time."
      },
      {      
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        year: 1937,
        selling: "100 Mil.",
        imageURL: "https://m.media-amazon.com/images/I/A1E+USP9f8L._AC_UF1000,1000_QL80_.jpg",
        topic: "The Hobbit is set within Tolkien's fictional universe and follows the quest of home-loving Bilbo Baggins, the titular hobbit, to win a share of the treasure guarded by a dragon named Smaug. Bilbo's journey takes him from his light-hearted, rural surroundings into more sinister territory."
      },
      {      
        title: "She: A History of Adventure",
        author: "H. Rider Haggard",
        year: 1886,
        selling: "100 Mil.",
        imageURL: "https://m.media-amazon.com/images/I/61A8rhB3SsL._AC_UF1000,1000_QL80_.jpg",
        topic: ""
      },
      {      
        title: "The Lion, the Witch and the Wardrobe",
        author: "C.S. Lewis",
        year: 1950,
        selling: "85 Mil.",
        imageURL: "https://m.media-amazon.com/images/I/51XJtkp3ALL.jpg",
        topic: "The story is a first-person narrative which follows the journey of Horace Holly and his ward Leo Vincey to a lost kingdom in the African interior. They encounter a native people and a mysterious white queen named Ayesha who reigns as the all-powerful \"She\" or \"She-who-must-be-obeyed\"."
      },
      {      
        title: "The Da Vinci Code",
        author: "Dan Brown",
        year: 2003,
        selling: "80 Mil.",
        imageURL: "https://m.media-amazon.com/images/I/81jtrIKJd2L._AC_UF1000,1000_QL80_.jpg",
        topic: "While in Paris on business, Harvard symbologist Robert Langdon receives an urgent late-night phone call. The elderly curator of the Louvre has been murdered inside the museum, a baffling cipher found near the body. As Langdon and a gifted French cryptologist, Sophie Neveu, sort through the bizarre riddles, they are stunned to discover a trail of clues hidden in the works of Da Vinci-clues visible for all to see and yet ingeniously disguised by the painter."
      },
      {      
        title: "Think and Grow Rich",
        author: "Napoleon Hill",
        year: 1937,
        selling: "70 Mil.",
        imageURL: "https://secure.syndetics.com/index.aspx?type=xw12&client=719-531-6333&upc=&oclc=&isbn=9781937879501/LC.JPG",
        topic: " In Think and Grow Rich, Hill draws on stories of Andrew Carnegie, Thomas Edison, Henry Ford, and other millionaires of his generation to illustrate his principles."
      },
      {      
        title: "Harry Potter and the Half-Blood Prince",
        author: "J.K. Rowling",
        year: 2005,
        selling: "65 Mil.",
        imageURL: "https://secure.syndetics.com/index.aspx?type=xw12&client=719-531-6333&upc=&oclc=&isbn=9780605000230/LC.JPG",
        topic: "Harry searches for the full and complex story of the boy who became Lord Voldemort, and thereby finds what may be his only vulnerability."
      },
      {      
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        year: 1951,
        selling: "65 Mil.",
        imageURL: "https://m.media-amazon.com/images/I/71gXe68LrWL._AC_UF894,1000_QL80_.jpg",
        topic: "The novel details two days in the life of 16-year-old Holden Caulfield after he has been expelled from prep school. Confused and disillusioned, Holden searches for truth and rails against the “phoniness” of the adult world. He ends up exhausted and emotionally unstable. The events are related after the fact."
      },
      {      
        title: "The Alchemist",
        author: "Paulo Coelho",
        year: 1988,
        selling: "65 Mil.",
        imageURL: "https://m.media-amazon.com/images/I/81FPzmB5fgL.jpg",
        topic: "The Alchemist is a classic novel in which a boy named Santiago embarks on a journey seeking treasure in the Egyptian pyramids after having a recurring dream about it and on the way meets mentors, falls in love, and most importantly, learns the true importance of who he is and how to improve himself and focus on what really matters in life."
      },
      {      
        title: "Harry Potter and the Chamber of Secrets",
        author: "J.K. Rowling",
        year: 1998,
        selling: "60 Mil.",
        imageURL: "https://secure.syndetics.com/index.aspx?type=xw12&client=719-531-6333&upc=&oclc=&isbn=9780439064873/LC.JPG",
        topic: "When the Chamber of Secrets is opened again at the Hogswart School for Witchcraft and Wizardry, second-year student Harry Potter finds himself in danger from a dark power that has once more been released on the school."
      },
      {      
        title: "Harry Potter and the Prisoner of Azkaban",
        author: "J.K. Rowling",
        year: 1999,
        selling: "55 Mil.",
        imageURL: "https://m.media-amazon.com/images/I/51vsSNLsBgL.jpg",
        topic: "During his third year at Hogwarts School for Witchcraft and Wizardry, Harry Potter must confront the devious and dangerous wizard responsible for his parents' deaths."
      },
      {      
        title: "Harry Potter and the Goblet of Fire",
        author: "J.K. Rowling",
        year: 2000,
        selling: "55 Mil.",
        imageURL: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b6/Harry_Potter_and_the_Goblet_of_Fire_cover.png/220px-Harry_Potter_and_the_Goblet_of_Fire_cover.png",
        topic: "Harry Potter wants to get away from the pernicious Dursleys and go to the International Quidditch Cup with Hermione, Ron, and the Weasleys. He wants to dream about Cho Chang, his crush (and maybe do more than dream). He wants to find out about the mysterious event involving two other rival schools of magic, and a competition that hasn't happened for a hundred years. He wants to be a normal, fourteen-year-old wizard. Unfortunately for Harry Potter, he's not normal -- even by wizarding standards. And in this case, different can be deadly."
      },
      {      
        title: "Harry Potter and the Order of the Phoenix",
        author: "J.K. Rowling",
        year: 2003,
        selling: "55 Mil.",
        imageURL: "https://m.media-amazon.com/images/I/516c41oodRL._SX437_BO1,204,203,200_.jpg",
        topic: "Harry Potter, now a fifth-year student at Hogwarts School of Witchcraft and Wizardry, struggles with a threatening teacher, a problematic house elf, the dread of upcoming final exams, and haunting dreams that hint toward his mysterious past."
      },
      {      
        title: "Harry Potter and the Deathly Hallows",
        author: "J.K. Rowling",
        year: 2007,
        selling: "50 Mil.",
        imageURL: "https://m.media-amazon.com/images/I/71sH3vxziLL.jpg",
        topic: "Burdened with the dark, dangerous, and seemingly impossible task of locating and destroying Voldermort's remaining Horcruxes, Harry, feeling alone and uncertain about his future, struggles to find the inner strength he needs to follow the path set out before him."
      },
      {      
        title: "One Hundred Years of Solitude",
        author: "Gabriel García Marquez",
        year: 1967,
        selling: "50 Mil.",
        imageURL: "https://s26162.pcdn.co/wp-content/uploads/2018/02/100_Years_First_Ed_Hi_Res-768x1153.jpg",
        topic: "One Hundred Years of Solitude tells the story of the rise and fall, birth and death of the mythical town of Macondo through the history of the Buendiá family. Inventive, amusing, magnetic, sad and alive with unforgettable men and women--brimming with truth, compassion, and a lyrical magic that strikes the soul--this novel is a masterpiece in the art of fiction."
      },
      {      
        title: "Lolita",
        author: "Vladimir Nabokov",
        year: 1955,
        selling: "50 Mil.",
        imageURL: "https://images.theconversation.com/files/87705/original/image-20150708-31595-171wo7h.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip",
        topic: "‘Lolita’ is the subversive story of a middle-aged man’s lustful obsession with his 12-year-old step-daughter."
      },
      {      
        title: "Anne of Green Gables",
        author: "Lucy Maud Montgomery",
        year: 1908,
        selling: "50 Mil.",
        imageURL: "https://secure.syndetics.com/index.aspx?type=xw12&client=719-531-6333&upc=&oclc=&isbn=9780141321592/LC.JPG",
        topic: "Marilla and Matthew Cuthbert are in for a big surprise. They are expecting the arrival of an orphan boy to help work at Green Gables, their farm and home - but a skinny, red-haired girl turns up instead. Feisty and full of spirit, Anne Shirley charms her way into the Cuthberts' affection with her vivid imagination and constant chatter. It's not long before Anne finds herself in trouble, but soon it becomes impossible for the Cuthberts to imagine life without 'their Anne' - and for the people of Avonlea to remember what life was like before this wildly creative little girl whirled into town."
      },
      {      
        title: "Charlotte’s Web",
        author: "E.B. White",
        year: 1952,
        selling: "50 Mil.",
        imageURL: "https://secure.syndetics.com/index.aspx?type=xw12&client=719-531-6333&upc=&oclc=&isbn=9780061124952/LC.JPG",
        topic: "E. B. White's Newbery Honor Book is a tender novel of friendship, love, life, and death that will continue to be enjoyed by generations to come. It contains illustrations by Garth Williams, the acclaimed illustrator of E. B. White's Stuart Little and Laura Ingalls Wilder's Little House series, among many other books."
      },
      {      
        title: "Black Beauty",
        author: "Anna Sewell",
        year: 1877,
        selling: "50 Mil.",
        imageURL: "https://images4.penguinrandomhouse.com/cover/9781101498392",
        topic: "A horse in nineteenth-century England recounts his experiences with both good and bad masters."
      },
    ]
  }

  render() {
    return (
      // 4. Create a Provider to send the data as children of Provider
      <BookContext.Provider value={this.state} >
        {this.props.children}
      </BookContext.Provider>
    );
  }
}

// 5. Export the data
export default BookContextProvider;

// TWO METHODS OF CONTEXT
// A -  Default Value  ---> this.context
// B - Provider       ---> Consumer
