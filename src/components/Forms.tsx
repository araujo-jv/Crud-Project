import { useState } from 'react'
import Client from '../core/Client'
import Input from './Input'
import Button from './Button'

interface FormsProps {
    client: Client
    clientChanged?: (client: Client) => void
    cancelled?: () => void
}

export default function Forms(props: FormsProps) {
    const id = props.client?.id
    const [name, setName] = useState(props.client?.name ?? '')
    const [age, setAge] = useState(props.client?.age ?? 0)
    return (
        <div>
            {id ? (
                <Input
                    text='Code'
                    value={id}
                    className='mb-5'
                />
            ) : false}
            <Input
                text='Name'
                value={name}
                valueChanged={setName}
                className='mb-5'
            />
            <Input
                text='Age'
                type='number'
                value={age}
                valueChanged={setAge}
            />
            <div className='flex justify-end mt-3'>
                <Button className='mr-2' fromColor='from-blue-400' toColor='to-blue-700'
                    onClick={() => props.clientChanged?.(new Client(name, +age, id))}>
                    {id ? 'Change' : 'Save'}
                </Button>
                <Button onClick={props.cancelled}>
                    Cancel
                </Button>
            </div>
        </div>
    )
}