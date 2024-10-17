import { useEffect, useState } from 'react';

import { generateClient } from 'aws-amplify/api';

import { createTodo } from './graphql/mutations';
import { listTodos } from './graphql/queries';
import { type CreateTodoInput, type Todo } from './API';

const initialState: CreateTodoInput = { name: '', description: '' };
const client = generateClient();
import {
    withAuthenticator,
    Button,
    Heading,
    Text,
    TextField,
    View
} from '@aws-amplify/ui-react';
import { type AuthUser } from "aws-amplify/auth";
import { type UseAuthenticator } from "@aws-amplify/ui-react-core";
import '@aws-amplify/ui-react/styles.css';

type AppProps = {
    signOut?: UseAuthenticator["signOut"]; //() => void;
    user?: AuthUser;
};

// eslint-disable-next-line react-refresh/only-export-components
const App: React.FC<AppProps> = ({ signOut, user }) => {
    const [formState, setFormState] = useState<CreateTodoInput>(initialState);
    const [todos, setTodos] = useState<Todo[] | CreateTodoInput[]>([]);

    useEffect(() => {
        fetchTodos();
    }, []);

    async function fetchTodos() {
        try {
            const todoData = await client.graphql({
                query: listTodos,
            });
            const todos = todoData.data.listTodos.items;
            setTodos(todos);
        } catch (err) {
            console.log('error fetching todos', err);
        }
    }

    async function addTodo() {
        try {
            if (!formState.name || !formState.description) return;
            const todo = { ...formState };
            setTodos([...todos, todo]);
            setFormState(initialState);
            await client.graphql({
                query: createTodo,
                variables: {
                    input: todo,
                },
            });
        } catch (err) {
            console.log('error creating todo:', err);
        }
    }

    return (
        <View style={styles.container}>
            <Heading level={1}>Hello {user?.username}</Heading>
            <Button style={styles.button} onClick={signOut}>
                Sign out
            </Button>
            <Heading level={2}>Amplify Todos</Heading>
            <TextField
                label=""
                placeholder="Name"
                onChange={(event) =>
                    setFormState({ ...formState, name: event.target.value })
                }
                style={styles.input}
                defaultValue={formState.name}
            />
            <TextField
                label=""
                placeholder="Description"
                onChange={(event) =>
                    setFormState({ ...formState, description: event.target.value })
                }
                style={styles.input}
                defaultValue={formState.description ?? ''}
            />
            <Button style={styles.button} onClick={addTodo}>
                Create Todo
            </Button>
            {todos.map((todo, index) => (
                <View key={todo.id ? todo.id : index} style={styles.todo}>
                    <Text style={styles.todoName}>{todo.name}</Text>
                    <Text style={styles.todoDescription}>{todo.description}</Text>
                </View>
            ))}
        </View>
    );
};

const styles = {
    container: {
        width: 400,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 20,
    },
    todo: { marginBottom: 15 },
    input: {
        border: "none",
        backgroundColor: "#ddd",
        marginBottom: 10,
        padding: 8,
        fontSize: 18,
    },
    todoName: { fontSize: 20, fontWeight: "bold" },
    todoDescription: { marginBottom: 0 },
    button: {
        backgroundColor: "black",
        color: "white",
        outline: "none",
        fontSize: 18,
        padding: "12px 0px",
    },
} as const;

export default withAuthenticator(App);