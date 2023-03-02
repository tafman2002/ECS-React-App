import {useState} from "react";
import axios from "axios";
import {Button, InputLabel, Stack, TextField} from "@mui/material";

export const Transportation = () => {
    const [data, setData] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(false);

    const getData = async () => {
        try {
          const response = await axios.get('');
          setData(response.data);
        } catch (error) {
            console.error(error);
        }

    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div>
            <Stack spacing={2} direction="column">
            <h1>Transportation</h1>
            <form>
                <InputLabel>Name</InputLabel>
                <TextField
                    type='text'
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                    placeholder='Name'
                />
                <InputLabel>Email</InputLabel>
                <TextField
                    type='text'
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    placeholder='Email'
                />
                <InputLabel>Phone</InputLabel>
                <TextField
                    type='text'
                    value={phone}
                    onChange={(e) => {
                        setPhone(e.target.value);
                    }}
                    placeholder='Phone'
                />
                <InputLabel>Description</InputLabel>
                <TextField
                    type='text'
                    value={description}
                    onChange={(e) => {
                        setDescription(e.target.value);
                    }}
                    placeholder='Description'
                />
                <Button onClick={handleSubmit}>Submit</Button>
            </form>
            </Stack>
        </div>
    );
}