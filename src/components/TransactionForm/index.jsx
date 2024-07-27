import { useState } from "react"
import { Button, Card, Form, Heading, Input, Label, Select } from "./styles"
import { useSelector } from "react-redux";

export const TransactionForm = () => {

    const [transactionType, setTransactionType] = useState('')
    const transactionTypes = useSelector((state) => state.transactionTypes.types);
    return (
        <Card>
            <Heading>
                Nova transação
            </Heading>
            <Form>
                <Select
                    value={transactionType}
                    onChange={evt => setTransactionType(evt.target.value)}
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
                    <Input placeholder="00,00" type="number" />
                </div>
                <Button>
                    Concluir transação
                </Button>
            </Form>
        </Card>
    )
}