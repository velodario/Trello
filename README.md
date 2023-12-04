VELO DARIO, MTI

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

Vercel link: https://trello-dario-velos-projects.vercel.app/

The page will reload when you make changes.\

For the implementation of this assignment I have only completed the option
for opening a board, editing (its name, description, board color) and deletion.
I have mainly worked with the antd react components library which helped me cover the bone structure for layers, buttons etc.
The rest of the personalization is made in css for each component.
For example, I have created different selectors for each button create-board-btn, create-board-btn-edit, create-board-btn-delete;
for the header, layer etc.
The main component for the general logic of the app is the usage of useState hook, where I have used variables:
isModalVisible that tracks whether the modal is currently visible or hidden and editingBoard representing the board that is currently being edited. The handleEditBoard function is triggered when a user wants to edit a specific board. It sets the editingBoard state to the selected board and then shows the modal using showModal. The handleDeleteBoard function is called when a user wants to delete a specific board. It filters the existing boards based on the selected board's ID, effectively removing it. The handleOk function is called when the user clicks the "OK" button within the modal. The handleCancel function is called when the user cancels or closes the modal. It sets isModalVisible to false and resets editingBoard to null
