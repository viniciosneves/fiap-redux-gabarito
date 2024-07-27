import { useSelector } from "react-redux";
import { Transaction } from "../Transaction";
import { Container, Heading, TransactionsList } from "./styles";

export const Statement = () => {

    const transactions = useSelector((state) => state.transactions.transactions);

    return (<Container>
        <Heading>
            Extrato
        </Heading>
        <TransactionsList>
            {transactions.map(transaction => <Transaction key={transaction.id} transaction={transaction}/>)}
        </TransactionsList>
    </Container>)
}