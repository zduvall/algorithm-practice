/*
Given n processes, each process has a unique PID (process id) and its PPID (parent process id).

Each process only has one parent process, but may have one or more children processes. This is just like a tree structure. Only one process has PPID that is 0, which means this process has no parent process. All the PIDs will be distinct positive integers.

We use two list of integers to represent a list of processes, where the first list contains PID for each process and the second list contains the corresponding PPID.

Now given the two lists, and a PID representing a process you want to kill, return a list of PIDs of processes that will be killed in the end. You should assume that when a process is killed, all its children processes will be killed. No order is required for the final answer.

Example 1:
Input: 
pid =  [1, 3, 10, 5]
ppid = [3, 0, 5, 3]
kill = 5
Output: [5,10]
Explanation: 
           3
         /   \
        1     5
             /
            10
Kill 5 will also kill 10.
Note:
The given kill id is guaranteed to be one of the given PIDs.
n >= 1.
*/

/**
 * @param {number[]} pid
 * @param {number[]} ppid
 * @param {number} kill
 * @return {number[]}
 */
const killProcess = function (pid, ppid, kill) {
  const res = [];
  const p = {};
  let toKill = [kill];

  for (let i = 0; i < ppid.length; i++) {
    const curChld = pid[i]
    const curPrnt = ppid[i]
    if (p[curPrnt]) p[curPrnt].push(curChld);
    else p[curPrnt] = [curChld]
  }

  while (toKill.length) {
    const k = toKill.pop()
    res.push(k)

    if(p[k]) toKill = [...toKill, ...p[k]]
  }

  return res
};


const pid = [1, 3, 10, 11, 5];
const ppid = [3, 0, 5, 5, 3];
const kill = 5;

console.log(killProcess(pid, ppid, kill));