import { useLayoutEffect, useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import IconButton from '../conmponets/ui/IconButton'
import { GlobalStyles } from '../constants/styles'
import Button from '../conmponets/ui/Button'
import { ExpensesContext } from '../store/expenses-context'

function ManageExpense ({ route, navigation }) {
  const expensesCtx = useContext(ExpensesContext)

  const editedExpenseId = route.params?.expenseId
  const isEditing = !!editedExpenseId

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense'
    })
  }, [navigation, isEditing])

  function deleteExpenseHandler () {
    expensesCtx.deleteExpense(editedExpenseId)
    navigation.goBack()
  }

  function cancelExpenseHandler () {
    navigation.goBack()
  }

  function confirmExpenseHandler () {
    if (isEditing) {
      expensesCtx.updateExpense(editedExpenseId, {
        description: 'TEST1',
        amount: 19.99,
        date: new Date('2025-06-03')
      })
    } else {
      expensesCtx.addExpense({
        description: 'TEST2',
        amount: 9.99,
        date: new Date('2025-06-03')
      })
    }
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Button
          style={styles.button}
          mode='flat'
          onPress={cancelExpenseHandler}
        >
          Cancel
        </Button>
        <Button style={styles.button} onPress={confirmExpenseHandler}>
          {isEditing ? 'Update' : 'Add'}
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon='trash'
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  )
}

export default ManageExpense

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center'
  }
})
