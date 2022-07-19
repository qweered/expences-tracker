import "./ExpenseForm.css";

const ExpenseForm = () => (
  <form>
    <div className="new-expense__controls">
      <div className="new-expense__control">
        <label>Title</label>
        <input type="text" />
      </div>
      <div className="new-expense__control">
        <label>Amount</label>
        <input min="0.01" step="0.01" type="number" />
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input max="2022-12-31" min="2019-01-01" type="date" />
      </div>
    </div>
    <div className="new-expense__actions">
      <button type="submit">Add Expense</button>
    </div>
  </form>
);

export default ExpenseForm;
