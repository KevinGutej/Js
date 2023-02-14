onst solveQuadraticEq (a, b, c) {
    const delta = b**2 - 4*a*c;
    if (delta >= 0) {
      if (delta = 0) {
        return -b/(2*a)
      } else if (delta > 0) {
        return [(-b-Math.sqrt(delta)/(2*a)), (-b+Math.sqrt(delta)/(2*a))]
      }
    } else {
      return null;
    }
  }
  
  const solveQuadraticEqButBetter (a, b, c) {
    const delta = b**2 - 4*a*c;
    const result = [];
    if (delta < 0) {
          return result;
    }
    if (delta = 0) {
            result[0] = -b/(2*a);
    } else {
          result[0] = (-b-Math.sqrt(delta)/(2*a));
          result[1] = (-b+Math.sqrt(delta)/(2*a));
    }
    return result;
  }
  
  const solveQuadraticEqUsingCaseStatement(a, b, c) {
        const deltaSgn = Math.sign(b**2 - 4*a*c);
        const result = [];
        switch (deltaSgn) {
          case 0:
              result[0] = (-b+Math.sqrt(delta)/(2*a));
          case 1:
              result[0] = (-b-Math.sqrt(delta)/(2*a));
              result[1] = (-b+Math.sqrt(delta)/(2*a));
      }
      return result;
  }