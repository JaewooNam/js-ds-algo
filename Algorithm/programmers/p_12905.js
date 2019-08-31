function solution(board)
{
    const answer = 0
    let arr = Array(board.length).fill(0)
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j ++) {
        if (board[i][j] === 0) {
          continue
        }
        if (board[i][j] === 1 && board[i][j+1] === 1) {
          arr[i]++
        }
      }
    }
    console.log(arr)
    return answer;
}

solution([[0,1,1,1],[1,1,1,1],[1,1,1,1],[0,0,1,0]])