import React from 'react'
import { connect } from 'react-redux'
import { Todo, fetchTodos, removeTodo } from '../actions' 
import { StoreState } from '../reducers'
import './App.css';

interface AppProps {
    todos: Todo[]
    fetchTodos: Function 
    removeTodo: typeof removeTodo
}

interface AppState {
    fetching: boolean
}

class _App extends React.Component<AppProps, AppState> {

    constructor(props: AppProps) {
        super(props)
        
        this.state = { fetching: false }
    }

    componentDidUpdate(prevProps: AppProps): void {
        if ((!prevProps.todos.length && this.props.todos.length)) {
            this.setState({ fetching: false }) 
        }
    }

    onButtonClick = (): void => {
        this.props.fetchTodos()
        this.setState({ fetching: true })
    }

    renderList = (): JSX.Element[] => {
        return this.props.todos.map((todo: Todo) => {
            return <div className='TodoCursor' onClick={() => this.props.removeTodo(todo.id)} key={todo.id}>{todo.title}</div>
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.onButtonClick}>Fetch</button>
                {this.state.fetching ? <div>Loading...</div> : this.renderList()}
            </div>
        )
    }
}

const mapStateToProps = (state: StoreState): { todos: Todo[] } => {
    return { todos: state.todos }
}

const mapDispatchToProps = {
    fetchTodos, 
    removeTodo
  }

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(_App)
