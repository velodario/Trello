// src/components/BoardGrid.js
import React, { useState } from "react";
import { Card, Button, Modal } from "antd";
import "./BoardGrid.css";

const BoardGrid = ({ boards, onCreateBoard, onEditBoard, onDeleteBoard }) => {
  const [detailsVisible, setDetailsVisible] = useState(false);
  const [selectedBoard, setSelectedBoard] = useState(null);

  const showDetails = (board) => {
    setSelectedBoard(board);
    setDetailsVisible(true);
  };

  const closeDetails = () => {
    setSelectedBoard(null);
    setDetailsVisible(false);
  };

  return (
    <div className="board-grid">
      <Button
        type="primary"
        onClick={onCreateBoard}
        className="create-board-btn"
      >
        Create New Board
      </Button>

      <div className="board-cards">
        {boards.map((board) => (
          <div key={board.id} className="board-card-container">
            <Card
              className="board-card"
              title={<span>{board.name}</span>}
              style={{ backgroundColor: board.color }}
            >
              <Button type="default" onClick={() => showDetails(board)}>
                Open
              </Button>
              <div className="board-card-actions">
                <Button
                  className="create-board-btn-edit"
                  type="primary"
                  onClick={() => onEditBoard(board)}
                >
                  Edit
                </Button>
                <Button
                  className="create-board-btn-delete"
                  type="primary"
                  onClick={() => onDeleteBoard(board.id)}
                >
                  Delete
                </Button>
              </div>
            </Card>
          </div>
        ))}
      </div>

      <Modal
        title={`Board Details: ${selectedBoard?.name}`}
        visible={detailsVisible}
        onCancel={closeDetails}
        footer={[
          <Button key="close" onClick={closeDetails}>
            Close
          </Button>,
        ]}
      >
        <p>Board ID: {selectedBoard?.id}</p>
        <p>Description: {selectedBoard?.description}</p>
      </Modal>
    </div>
  );
};

export default BoardGrid;
