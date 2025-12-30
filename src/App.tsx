import Card from "./StateAssignment/Card";
import { useState } from "react";
import './App.css';

function App() {
  const [readingBooks, setReadingBooks] = useState([
    {
      image: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f",
      title: "React Basics",
      author: "Sriram.",
      time: "2h ago",
      views: 120,
    },
    {
      image: "https://images.unsplash.com/photo-1527430253228-e93688616381",
      title: "TypeScript Guide",
      author: "Kumar.",
      time: "5h ago",
      views: 85,
    },
  ]);

  const [finishedBooks, setFinishedBooks] = useState([
    {
      image: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34",
      title: "JavaScript Mastery",
      author: "Saran.",
      time: "1d ago",
      views: 200,
    },
    {
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      title: "HTML & CSS",
      author: "Ranagarajan.",
      time: "3d ago",
      views: 150,
    },
  ]);

  const [section, setSection] = useState<"reading" | "finished">("reading");

  const moveToFinished = (index: number) => {
    const book = readingBooks[index];
    setFinishedBooks([...finishedBooks, book]);
    setReadingBooks(readingBooks.filter((_, i) => i !== index));
  };

  const moveToReading = (index: number) => {
    const book = finishedBooks[index];
    setReadingBooks([...readingBooks, book]);
    setFinishedBooks(finishedBooks.filter((_, i) => i !== index));
  };

  return (
    <div style={styles.wrapper}>
      <h1 style={styles.heading}>My Library</h1>
      <div style={styles.tabs}>
        <span
          style={{
            ...styles.tab,
            borderBottom: section === "reading" ? "3px solid blue" : "none",
            color: section === "reading" ? "blue" : "black",
          }}
          onClick={() => setSection("reading")}
        >
          Reading
        </span>
        <span
          style={{
            ...styles.tab,
            borderBottom: section === "finished" ? "3px solid blue" : "none",
            color: section === "finished" ? "blue" : "black",
          }}
          onClick={() => setSection("finished")}
        >
          Finished
        </span>
      </div>

      <div style={styles.container}>
        {section === "reading"
          ? readingBooks.map((book, index) => (
              <Card
                key={index}
                image={book.image}
                title={book.title}
                author={book.author}
                time={book.time}
                views={book.views}
                actionLabel="Finish"
                onAction={() => moveToFinished(index)}
              />
            ))
          : finishedBooks.map((book, index) => (
              <Card
                key={index}
                image={book.image}
                title={book.title}
                author={book.author}
                time={book.time}
                views={book.views}
                actionLabel="Read Again"
                onAction={() => moveToReading(index)}
              />
            ))}
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    paddingLeft: "30px",
    paddingTop: "20px",
  },
  heading: {
    marginBottom: "10px",
  },
  container: {
    display: "flex",
    gap: "20px",
    paddingTop: "20px",
  },
  tabs: {
    display: "flex",
    gap: "30px",
    marginBottom: "20px",
    cursor: "pointer",
  },
  tab: {
    fontSize: "20px",
    paddingBottom: "5px",
    cursor: "pointer",
  },
};

export default App;
