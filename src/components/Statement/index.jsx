import { useSelector } from "react-redux";
import { Transaction } from "../Transaction";
import { Container, Heading, TransactionsList } from "./styles";
import { selectTransactions } from "../../features/transactions/transactionsSlice";

export const Statement = () => {

    const transactions = useSelector(selectTransactions);

    return (<Container>
        <Heading>
            Extrato
        </Heading>
        <TransactionsList>
            {transactions.map(transaction => <Transaction key={transaction.id} transaction={transaction}/>)}
        </TransactionsList>
    </Container>)
}