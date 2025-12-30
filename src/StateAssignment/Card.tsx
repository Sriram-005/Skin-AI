import React from "react";

type CardProps = {
  image: string;
  title: string;
  author: string;
  time?: string;
  views?: number;
  onAction?: () => void;
  actionLabel?: string;
};

const Card: React.FC<CardProps> = ({
  image,
  title,
  author,
  time,
  views,
  onAction,
  actionLabel,
}) => {
  return (
    <div style={styles.card}>
      <img src={image} alt={title} style={styles.image} />
      <div style={styles.leftText}>
        <h2 style={styles.title}>{title}</h2>
        <p style={styles.author}>{author}</p>
      </div>
      {(time || views !== undefined) && (
        <div style={styles.infoRow}>
          {time && (
            <div style={styles.infoItem}>
              <span style={styles.icon}>⏰</span> {time}
            </div>
          )}
          {views !== undefined && (
            <div style={{ ...styles.infoItem, justifyContent: "flex-end" }}>
              <span style={styles.icon}>👤</span> {views}
            </div>
          )}
        </div>
      )}
      {actionLabel && (
        <div style={styles.actionContainer}>
          <p style={styles.actionText} onClick={onAction}>
            {actionLabel}
          </p>
        </div>
      )}
    </div>
  );
};

const styles = {
  card: {
    width: "260px",
    padding: "15px",
    borderRadius: "12px",
    background: "#ffffff",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  image: {
    width: "100%",
    borderRadius: "10px",
  },
  leftText: {
    textAlign: "left" as const,
    marginTop: "10px",
  },
  title: {
    margin: "0 0 5px",
    fontSize: "16px",
  },
  author: {
    fontSize: "14px",
    color: "#555",
    margin: 0,
  },
  infoRow: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px",
    fontSize: "13px",
    color: "#777",
  },
  infoItem: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
  },
  icon: {
    fontSize: "14px",
  },
  actionContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "10px",
  },
  actionText: {
    fontSize: "14px",
    color: "blue",
    textDecoration: "underline",
    cursor: "pointer",
  },
};

export default Card;

