import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'
import Button from '../../UI/Button'
function TodoActions({ deleteAll, deleteComtletedHandler }) {
  return (
    <>
      <Button title="Reset Todos">
        <RiRefreshLine />
      </Button>
      <button title="Clear Comleted Todos" onClick={deleteComtletedHandler}>
        <RiDeleteBin2Line />
      </button>
      <button title="Clear all Todos">
        All
        <RiDeleteBin2Line />
      </button>
    </>
  )
}
export default TodoActions
