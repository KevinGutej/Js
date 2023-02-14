function IsAdmin (user) {
    if (user.role == 'admin') {
        if (user.manager == true) {
            return true;
        } else {
              return false;
        }
    } else {
          return false;
      }
}

/* GUARD CLAUSE */

function IsAdmin (user) {
      if (user.role != 'admin') {
          return false;
      }
    if (user.manager != true) {
        return false;
    }
    return true;
}

/* LOGIC OPERATORS MANIPULATIONS */

function IsAdmin (user) {
      return !(user.role == 'admin' || user.manager);
}