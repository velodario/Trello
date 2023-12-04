// src/App.js
import React, { useState } from "react";
import { Layout, Modal, Form, Input, Button, Select } from "antd";
import BoardGrid from "./components/BoardGrid";
import "./App.css";

const { Content } = Layout;
const { Option } = Select;

const App = () => {
  const [boards, setBoards] = useState([
    {
      id: "1",
      name: "Trello Board",
      description: "Sample description",
      color: "#3498db",
    },
  ]);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingBoard, setEditingBoard] = useState(null);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = (values) => {
    if (editingBoard) {
      setBoards((prevBoards) =>
        prevBoards.map((board) =>
          board.id === editingBoard.id
            ? {
                ...board,
                name: values.boardName,
                description: values.boardDescription,
                color: values.boardColor,
              }
            : board
        )
      );
    } else {
      const newBoard = {
        id: Date.now().toString(),
        name: values.boardName,
        description: values.boardDescription,
        color: values.boardColor,
      };
      setBoards((prevBoards) => [...prevBoards, newBoard]);
    }
    setIsModalVisible(false);
    setEditingBoard(null);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setEditingBoard(null);
  };

  const handleEditBoard = (board) => {
    setEditingBoard(board);
    showModal();
  };

  const handleDeleteBoard = (boardId) => {
    setBoards((prevBoards) =>
      prevBoards.filter((board) => board.id !== boardId)
    );
  };

  return (
    <Layout>
      <Content className="header-style">
        <h1>Trello</h1>
        <BoardGrid
          boards={boards}
          onCreateBoard={showModal}
          onEditBoard={handleEditBoard}
          onDeleteBoard={handleDeleteBoard}
        />
      </Content>

      <Modal
        title={editingBoard ? "Edit Board" : "Create New Board"}
        visible={isModalVisible}
        footer={null}
        onCancel={handleCancel}
      >
        <Form
          onFinish={handleOk}
          initialValues={{
            boardName: editingBoard?.name,
            boardDescription: editingBoard?.description,
            boardColor: editingBoard?.color || "#3498db",
          }}
        >
          <Form.Item
            label="Board Name"
            name="boardName"
            rules={[
              { required: true, message: "Please input the board name!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Description" name="boardDescription">
            <Input.TextArea />
          </Form.Item>
          <Form.Item label="Select Color" name="boardColor">
            <Select>
              <Option
                value="#3498db"
                style={{ backgroundColor: "#3498db" }}
              ></Option>
              <Option
                value="#e74c3c"
                style={{ backgroundColor: "#e74c3c" }}
              ></Option>
              <Option
                value="#27ae60"
                style={{ backgroundColor: "#27ae60" }}
              ></Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {editingBoard ? "Save Edit" : "Create Board"}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </Layout>
  );
};

export default App;
