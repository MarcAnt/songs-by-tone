export const songSearchRegx =
  /:|;|"|'|{|}|&|%|@|!|`|~|=|_|<|>|(\*+)|(\?+)|(\$+)|(\*+)|(\?+)|(\^+)|(\[+)|(\]+)|(\\+)|(\|+)|(\(+)|(\)+)|([acdefghijklnopqrtvwxyz])|([H-L])|([N-Z])|([0])/g;

export const chordsInputRegx =
  /\s|:|;|"|'|{|}|&|%|@|!|`|~|=|_|(\.+)|<|>|(\$+)|(\*+)|(\?+)|(\^+)|(\[+)|(\]+)|(\\+)|(\|+)|(\(+)|(\)+)|([cefhjklnopqrtvwxyz])|([H-L])|([N-Z])|0/g;

export const tonesInputRegx =
  /\s|:|;|"|'|{|}|&|%|@|!|`|~|=|_|<|>|(\.+)|(\$+)|(\*+)|(\?+)|(\^+)|(\[+)|(\]+)|(\\+)|(\|+)|(\(+)|(\)+)|([acdefghijklnopqrstuvwxyz])|([H-L])|([N-Z])|[0-9]/g;

export const separadoresRegx = /,/g;
