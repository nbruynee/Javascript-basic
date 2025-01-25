console.log(1);
console.log(2);
setTimeout(() => {
    console.log(`Run after 5s`)
}, 5000);
console.log(3);
console.log(4);
console.log(5);

// asynchronous (bất đồng bộ)
// + In this model, commands can be executed independently(độc lập) of each other, 
// without having to wait for the previous command to complete. 
// + A task that takes a long time will be put into a separate (riêng) thread (luồng) (or a "promise", "callback", ...) 
// for parallel (song song) processing. Meanwhile (trong khi đó), other commands continue to run.

// synchronous (đồng bộ)
// + In this model, commands(các lệnhlệnh) are executed sequentially(tuần tự), from top to bottom.
// + If a command takes a long time to complete (e.g. calling an API or reading a large file), 
// the commands after it must wait until that command completes.