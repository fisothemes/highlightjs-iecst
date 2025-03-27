# Example TwinCAT ST Syntax Highlighting

This book is a showcase of Structured Text (ST) syntax for your mdBook using Highlight.js

## Sample TwinCAT ST Code

Below are several examples of the syntax highlighting in action:

### Defining an Interface
```iecst
// Define an Interface for Motor Control
INTERFACE I_Motor
    METHOD Start : BOOL END_METHOD
    METHOD Stop : BOOL END_METHOD
    METHOD SetSpeed
    VAR_INPUT 
        fSpeed : LREAL;
    END_VAR
    END_METHOD
END_INTERFACE
```

### Defining a Function Block
```iecst
// Function Block implementing IMotor Interface
{attribute 'no_explicit_call' := 'do not call this POU directly'} 
FUNCTION_BLOCK FB_MotorController EXTENDS FB_Object IMPLEMENTS I_Motor
VAR
    _bIsRunning     : BOOL;
    _fCurrentSpeed  : LREAL;
END_VAR
    // Implementing the Start Method
    METHOD Start : BOOL
        THIS^._bIsRunning   := TRUE;
        Start               := THIS^._bIsRunning;
        (* Rest of code if needed... *)
    END_METHOD

    // Implementing the Stop Method
    METHOD Stop : BOOL
        THIS^._bIsRunning       := FALSE;
        THIS^._fCurrentSpeed    := 0.0;
        Stop                    := NOT THIS^._bIsRunning;
    END_METHOD

    // Implementing the SetSpeed Method
    METHOD SetSpeed
    VAR_INPUT
        fSpeed : LREAL;
    END_VAR
        THIS^._fCurrentSpeed := SEL(THIS^._bIsRunning, 0.0, fSpeed);
    END_METHOD
END_FUNCTION_BLOCK
```

### Defining a Function
```iecst
// Function to calculate the average given numbers
FUNCTION F_CalculateAverageSpeed : LREAL
VAR_IN_OUT CONSTANT
    arSpeeds        : ARRAY[*] OF LREAL;
END_VAR
VAR
    fNumberOfSpeeds : LREAL;
    i               : __XINT;
END_VAR
    fNumberOfSpeeds := TO_LREAL(
        ABS(UPPER_BOUND(arSpeeds, 1) - LOWER_BOUND(arSpeeds, 1))
    );

    FOR i := LOWER_BOUND(arSpeeds, 1) TO UPPER_BOUND(arSpeeds, 1) DO
        F_CalculateAverageSpeed := F_CalculateAverageSpeed + arSpeeds[i];
    END_FOR

    F_CalculateAverageSpeed := F_CalculateAverageSpeed / fNumberOfSpeeds;
END_FUNCTION
```

### Defining a Program
```iecst
// Main Program
PROGRAM MAIN
VAR
    bStart          : BOOL;
    bStop           : BOOL := TRUE;
    fbMotor         : FB_MotorController;
    fAverageSpeed   : REAL;
    arSpeeds        : ARRAY[0..1] OF LREAL := [150.5, 180.2];
END_VAR

// Start the motor
IF bStart THEN 
    bStop := NOT fbMotor.Start();
    fbMotor.SetSpeed(arSpeeds[0]);
END_IF

// Stop the motor
IF bStop THEN
    bStart := NOT fbMotor.Stop();
END_IF

// Calculate average speed
fAverageSpeed := F_CalculateAverageSpeed(arSpeeds);

END_PROGRAM
```

### Working with Integer Literals
```iecst
VAR
    // Decimal literal with underscores for readability:
    nDecimal : LINT := 18_000_000;  
    
    // Binary literal (base 2) with an underscore separator:
    nBinary  : LINT := 2#1001_0011;  
    
    // Octal literal (base 8) using a simple value:
    nOctal   : LINT := 8#22;          
    
    // Hexadecimal literal (base 16) with mixed digits and letters:
    nHex     : LINT := 16#12A;          
    
    // Simple integer literal using the type prefix:
    nSimple  : LINT := INT#44;          
    
    // Large unsigned integer literal using an unsigned type:
    nUnsigned : ULINT := ULINT#4_294_967_295;
    
    // Integer literal without underscores for comparison:
    nPlain    : DINT := DINT#123456;
END_VAR
```

### Working with Real Literals
```iecst
VAR CONSTANT
    // Standard real literal in scientific notation:
    fElementaryCharge : LREAL := LREAL#1.602E-19;
    
    // Real literal with underscores in the integer part:
    fMeasurement      : LREAL := LREAL#3_141.5926535;
    
    // Real literal with a fractional part and exponent:
    fLargeValue       : REAL  := REAL#6.022E23;  // Avogadro's number
    
    // Real literal with underscore in exponent (for improved readability):
    fReadableExp      : LREAL := LREAL#2.71828E+00; // Euler's number
END_VAR

```

### Working with Duration Literals
```iecst
VAR CONSTANT
    // TIME literal (without nanoseconds)
    // Format: T#<value><unit>[<value><unit>...]
    tSystemTick : TIME  := T#1d2h3m4s5ms6us;  
    
    // TIME literal with only a single unit:
    tShortDelay : TIME  := T#500ms;                         

    // LTIME literal (with nanosecond precision)
    // Format: LTIME#<value><unit>[<value><unit>...]
    ltPrecise   : LTIME := LTIME#3h30m15s250ms125us75ns;
    
    // LTIME literal with only hours and minutes:
    ltWorking   : LTIME := LTIME#2h45m;
    
    // DATE literal (ISO format: YYYY-MM-DD)
    dCurrentDay : DATE  := D#2025-03-25;           
    
    // TOD (Time-of-Day) literal (HH:MM:SS)
    todCurrent  : TOD   := TOD#22:02:44;             
    
    // DT (Date and Time) literal (YYYY-MM-DD-HH:MM:SS)
    dtTimestamp : DT    := DT#2025-03-25-22:02:44;     
END_VAR

```

### Working with Pointers
```iecst
VAR
    nValue : INT := 42;
    pValue : POINTER TO INT;
END_VAR

// Assign the address of nValue to pValue
pValue := ADR(nValue);

// Dereference pValue to update nValue
nValue := pValue^ + 1;
```

### Working with References
```iecst
VAR
    nOriginal   : INT := 100;
    nRef        : REFERENCE TO INT;
END_VAR

// Assign the reference to nOriginal
nRef REF= nOriginal;

// Modify nOriginal via the reference
nRef := nRef + 10;
```