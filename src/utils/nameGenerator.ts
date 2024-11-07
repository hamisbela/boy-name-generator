interface NameDatabase {
  [key: string]: string[];
}

const NAMES_BY_NATIONALITY: NameDatabase = {
  african: [
    'Abayomi', 'Chidi', 'Dayo', 'Folami', 'Jabari', 'Kenzo', 'Kwame', 'Malik',
    'Nnamdi', 'Oluwaseun', 'Sefu', 'Taiwo', 'Tendai', 'Uzoma', 'Zuberi',
    'Kofi', 'Olayinka', 'Babajide', 'Chibueze', 'Folarin'
  ],
  american: [
    'James', 'William', 'Oliver', 'Henry', 'Lucas', 'Benjamin', 'Theodore', 'Jack',
    'Liam', 'Alexander', 'Owen', 'Sebastian', 'Caleb', 'Samuel', 'Joseph',
    'Daniel', 'David', 'Michael', 'Mason', 'Ethan'
  ],
  french: [
    'Antoine', 'Baptiste', 'Claude', 'Dominique', 'Étienne', 'François', 'Gabriel', 'Henri',
    'Jean', 'Louis', 'Marcel', 'Nicolas', 'Pierre', 'Rémy', 'Simon',
    'Théo', 'Victor', 'Xavier', 'Yves', 'Zacharie'
  ],
  german: [
    'Alexander', 'Benedikt', 'Constantin', 'Dominik', 'Erik', 'Florian', 'Gustav', 'Heinrich',
    'Johannes', 'Karl', 'Lukas', 'Maximilian', 'Niklas', 'Otto', 'Paul',
    'Robert', 'Stefan', 'Thomas', 'Ulrich', 'Wilhelm'
  ],
  indian: [
    'Aarav', 'Arjun', 'Dev', 'Ishaan', 'Krishna', 'Mihir', 'Nikhil', 'Om',
    'Pranav', 'Rahul', 'Sai', 'Shiv', 'Varun', 'Vihaan', 'Yash',
    'Aditya', 'Dhruv', 'Kabir', 'Rohan', 'Vivaan'
  ],
  japanese: [
    'Akira', 'Daiki', 'Haruto', 'Hiroshi', 'Ichiro', 'Kaito', 'Kenji', 'Kenzo',
    'Makoto', 'Riku', 'Satoshi', 'Shiro', 'Takashi', 'Yuki', 'Zen',
    'Hiro', 'Katsu', 'Minoru', 'Ryuu', 'Taro'
  ],
  russian: [
    'Alexander', 'Boris', 'Dmitri', 'Fyodor', 'Grigori', 'Igor', 'Ivan', 'Kirill',
    'Maxim', 'Mikhail', 'Nikolai', 'Oleg', 'Pavel', 'Roman', 'Sergei',
    'Viktor', 'Vladimir', 'Yuri', 'Zakhar', 'Artem'
  ]
};

const ALL_NAMES = Object.values(NAMES_BY_NATIONALITY).flat();

export function generateNames(startsWith: string = '', length: string = '', nationality: string = ''): string[] {
  let namePool = nationality ? NAMES_BY_NATIONALITY[nationality] || ALL_NAMES : ALL_NAMES;
  
  if (startsWith) {
    namePool = namePool.filter(name => 
      name.toLowerCase().startsWith(startsWith.toLowerCase())
    );
  }
  
  if (length) {
    const nameLength = parseInt(length);
    namePool = namePool.filter(name => name.length === nameLength);
  }
  
  // Shuffle and get 6 names
  const shuffled = namePool.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 6);
}