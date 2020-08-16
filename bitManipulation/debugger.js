// 5.5 Debugger: Explain what the following code does: ((n & (n-1)) == 0).

// This code is effectively telling us if n is a power of 2.  In the case when n is a power of 2, it will be a 1 with trailing 0s (or just a 1).  When we subtract 1 from that, we reduce the leftmost digit (a 1) by 1, and the trailing 0s become 1s (we are effectively NOT-ing that binary number).  When we AND this, we get 0.  That is the only case that will result in a 0.  If the AND is 0, we know that n is a power of 2.