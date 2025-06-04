import { View, StyleSheet } from 'react-native'
import ExpensesSummary from './ExpensesSummery'
import ExpensesList from './ExpensesList'
import { GlobalStyles } from '../../constants/styles'

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'A apir of shoes',
    amount: 59.99,
    date: new Date('2025-05-30')
  },
  {
    id: 'e2',
    description: 'A pair of flip-flops',
    amount: 99.99,
    date: new Date('2025-05-31')
  },
  {
    id: 'e3',
    description: 'Apples',
    amount: 1.89,
    date: new Date('2025-05-31')
  },
  {
    id: 'e4',
    description: 'A book',
    amount: 15.89,
    date: new Date('2025-06-01')
  },
  {
    id: 'e5',
    description: 'Another Book',
    amount: 14.89,
    date: new Date('2025-06-01')
  }
]

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
    <View style={styles.conatainer}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  )
}

export default ExpensesOutput

const styles = StyleSheet.create({
  conatainer: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700
  }
})
