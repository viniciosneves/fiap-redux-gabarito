import { useState } from "react"
import { Button, Card, Form, Heading, Input, Label, Select } from "./styles"
import { useDispatch, useSelector } from "react-redux";
import { addTransaction } from "../../features/transactions/transactionsSlice";

export const TransactionForm = () => {

    const [transactionType, setTransactionType] = useState('')
    const [transactionValue, setTransactionValue] = useState('')
    const transactionTypes = useSelector((state) => state.transactionTypes.types);

    const dispatch = useDispatch();

    function createTransaction(evt) {
        evt.preventDefault()
        dispatch(addTransaction({
            value: parseFloat(transactionValue),
            type: transactionType
        }))
    }

    return (
        <Card>
            <Heading>
                Nova transação
            </Heading>
            <Form onSubmit={createTransaction}>
                <Select
                    value={transactionType}
                    onChange={evt => setTransactionType(evt.target.value)}
                    required
                >
                    <option value="" disabled hidden>
                        Selecione o tipo de transação
                    </option>
                    {transactionTypes.map((transactionType) => (
                        <option key={transactionType} value={transactionType}>
                            {transactionType}
                        </option>
                    ))}
                </Select>
                <div>
                    <Label>
                        Valor
                    </Label>
                    <Input 
                        placeholder="00,00" 
                        type="number" 
                        value={transactionValue}
                        onChange={evt => setTransactionValue(evt.target.value)}
                        required
                    />
                </div>
                <Button>
                    Concluir transação
                </Button>
            </Form>
        </Card>
    )
}