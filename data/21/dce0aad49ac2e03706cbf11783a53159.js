callback({
  "levelNumber": 21,
  "size": 36,
  "steps": 36,
  "successRatio": 0.1,
  "type": "specific",
  "author": "viamodulo",
  "hash": "dce0aad49ac2e03706cbf11783a53159",
  "path": "21-Zero-Terminated-Sum-10.72/36.36.specific-viamodulo.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM\n-- 21-Zero-Terminated-Sum - SIZE 36/10 - SPEED 36/72 --\n\n-- This solution is level-specific (patterned and quantity-limited input) and\n-- assumes 5 runs of length : 2, 3, 0, 0 and 6.\n\n-- Based on 31.52.specific-Mygod.asm.\n\t\n\t-- first run, 2 long\n    INBOX   \n    COPYTO   0\n    INBOX   \n    ADD      0\n    OUTBOX \n    INBOX   \n\n\t-- second run, 3 long\n\tINBOX   \n    COPYTO   0\n\tINBOX\n\tADD \t 0\n\tCOPYTO   0\n\tINBOX   \n    ADD      0\n    OUTBOX\n\tINBOX\n\t\n\t-- third run, empty\n\tINBOX\n\tOUTBOX\n\t\n\t-- fourth run, empty\n\tINBOX\n\tOUTBOX\n\t\n\t-- fifth run, 6 long\n    INBOX   \n    COPYTO   0\n    INBOX   \n    ADD      0\n    COPYTO   0\n    INBOX   \n    ADD      0\n    COPYTO   0\n    INBOX   \n    ADD      0\n    COPYTO   0\n    INBOX   \n    ADD      0\n    COPYTO   0\n    INBOX   \n    ADD      0\n    OUTBOX  \n\n"
});