import { LibraryState } from '../../features/library/librarySlice'

export const initialState: LibraryState = {
  books: [
    {
      book: {
        title: 'The Lord of the Rings',
        author: {
          name: 'J.R.R. Tolkien',
          otherBooks: ['The Hobbit', 'The Silmarillion']
        },
        cover:
          'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg',
        genre: 'Fantasia',
        pages: 1200,
        ISBN: '978-0618640157',
        synopsis:
          'Aventure épica en un mundo de fantasia llamado la Tierra Media.',
        year: 1954
      }
    },
    {
      book: {
        title: 'La Guía del Autoestopista Galáctico',
        pages: 216,
        genre: 'Ciencia ficción',
        cover:
          'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1653311117i/6691227.jpg',
        synopsis: 'Un viaje absurdo y cómico por el espacio, con toallas.',
        year: 1979,
        ISBN: '978-0345391803',
        author: {
          name: 'Douglas Adams',
          otherBooks: [
            'El restaurante del fin del mundo',
            'La vida, el universo y todo lo demás'
          ]
        }
      }
    },
    {
      book: {
        title: 'Neuromante',
        pages: 271,
        genre: 'Ciencia ficción',
        cover:
          'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1554437249i/6088007.jpg',
        synopsis:
          'Una visión profética de la ciber-realidad y la inteligencia artificial.',
        year: 1984,
        ISBN: '978-0441569595',
        author: {
          name: 'William Gibson',
          otherBooks: ['Conde Cero', 'Mona Lisa Acelerada']
        }
      }
    },
    {
      book: {
        title: 'Fahrenheit 451',
        pages: 249,
        genre: 'Ciencia ficción',
        cover:
          'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1383718290i/13079982.jpg',
        synopsis:
          "Una sociedad futura donde los libros están prohibidos y 'bomberos' queman cualquier libro que encuentren.",
        year: 1953,
        ISBN: '978-1451673319',
        author: {
          name: 'Ray Bradbury',
          otherBooks: ['Crónicas marcianas', 'El hombre ilustrado']
        }
      }
    },
    {
      book: {
        title: 'El resplandor',
        pages: 688,
        genre: 'Terror',
        cover:
          'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1641398308i/60038757.jpg',
        synopsis:
          'Una familia se muda a un hotel aislado para el invierno donde una presencia siniestra influye en el padre hacia la violencia.',
        year: 1977,
        ISBN: '978-0307743657',
        author: {
          name: 'Stephen King',
          otherBooks: ['Carrie', 'It']
        }
      }
    },
    {
      book: {
        title: 'Drácula',
        pages: 418,
        genre: 'Terror',
        cover:
          'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1387151694i/17245.jpg',
        synopsis:
          'La historia del infame conde Drácula y su intento de mudarse de Transilvania a Inglaterra.',
        year: 1897,
        ISBN: '978-0486411095',
        author: {
          name: 'Bram Stoker',
          otherBooks: [
            'La joya de las siete estrellas',
            'La madriguera del gusano blanco'
          ]
        }
      }
    },
    {
      book: {
        title: 'Frankenstein',
        pages: 280,
        genre: 'Terror',
        cover:
          'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1669159060i/63631742.jpg',
        synopsis:
          'Un científico obsesionado crea una criatura viva a partir de partes de cuerpos robadas, con consecuencias desastrosas.',
        year: 1818,
        ISBN: '978-0486282114',
        author: {
          name: 'Mary Shelley',
          otherBooks: ['El último hombre', 'Valperga']
        }
      }
    },
    {
      book: {
        title: 'La llamada de Cthulhu',
        pages: 43,
        genre: 'Terror',
        cover:
          'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1485924654i/34094154.jpg',
        synopsis:
          'La historia de un monstruo ancestral que amenaza con revivir y dominar el mundo.',
        year: 1928,
        ISBN: '978-1542461690',
        author: {
          name: 'H.P. Lovecraft',
          otherBooks: ['El horror de Dunwich', 'En las montañas de la locura']
        }
      }
    },
    {
      book: {
        title: 'The Alchemist',
        genre: 'Novel',
        cover:
          'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR2ohAHwMTPhtEZsWZ0eDWT528HCjhpx9AHAbsb9FSOgNKM4JI9',
        year: 1988,
        author: {
          name: 'Paulo Coelho',
          otherBooks: []
        },
        ISBN: '978-1-534-78816-2',
        pages: 208,
        synopsis:
          'The Alchemist is a novel by Brazilian writer Paulo Coelho, published in 1988.'
      }
    }
  ],
  filterBooks: [] as Book[],
  filters: {
    genres: [],
    maxNumberOfPages: 0
  },
  readingList: [] as Book[],
  status: 'idle',
  bookDetail: {} as Book
}
