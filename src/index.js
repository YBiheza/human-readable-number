module.exports = function toReadable (number) {
    let answ = '';
    let l = String(number).length;
    let str = String(number);
    
    if (str[l-2] != '1') {
        if (str[l - 1] == 1) {
        answ = 'one';
        } else {
            if (str[l - 1] == 2) {
                answ = 'two';
            } else {
                if (str[l - 1] == 3) {
                answ = 'three';
                } else {
                if (str[l - 1] == 4) {
                    answ = 'four';
                } else {
                    if (str[l - 1] == 5) {
                    answ = 'five';
                    } else {
                    if (str[l - 1] == 6) {
                        answ = 'six';
                    } else {
                        if (str[l - 1] == 7) {
                        answ = 'seven';
                        } else {
                        if (str[l - 1] == 8) {
                            answ = 'eight';
                        } else {
                            if (str[l - 1] == 9) {
                            answ = 'nine';
                            }
                        }
                        }
                    }
                    }
                }
                }
            }
        }
    } else {
        if (str[l - 2] == 1 /*&& str[l - 2] == l*/) {
            if (str[l - 1] == 1) {
                answ = answ + 'eleven';
            } else {
                if (str[l - 1] == 2) {
                    answ = answ + 'twelve';
                } else {
                    if (str[l - 1] == 3) {
                        answ = answ + 'thirteen';
                    } else {
                        if (str[l - 1] == 4) {
                            answ = answ + 'fourteen';
                        } else {
                            if (str[l - 1] == 5) {
                                answ = answ + 'fifteen';
                            } else {
                                if (str[l - 1] == 6) {
                                    answ = answ + 'sixteen';
                                } else {
                                    if (str[l - 1] == 7) {
                                        answ = answ + 'seventeen';
                                    } else {
                                        if (str[l - 1] == 8) {
                                            answ = answ + 'eighteen';
                                        } else {
                                            if (str[l - 1] == 9) {
                                                answ = answ + 'nineteen';
                                            } else {
                                                if (str[l - 1] == 0) {
                                                    answ = answ + 'ten';
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    if (l >= 2 && str[l - 2] != 1) {
        if (str[l - 2] === '2') {
            answ = 'twenty' + " " + answ;
        } else {
            if (str[l - 2] === '3') {
                answ = 'thirty' + " " + answ;
            } else {
                if (str[l - 2] == 4) {
                    answ = 'forty' + " " + answ;
                } else {
                    if (str[l - 2] == 5) {
                        answ = 'fifty' + " " + answ;
                    } else {
                        if (str[l - 2] == 6) {
                            answ = 'sixty' + " " + answ;
                        } else {
                            if (str[l - 2] == 7) {
                                answ = 'seventy' + " " + answ;
                            } else {
                                if (str[l - 2] == 8) {
                                    answ = 'eighty' + " " + answ;
                                } else {
                                    if (str[l - 2] == 9) {
                                        answ = 'ninety' + " " + answ;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    if (l == 3) {
        if (str[l-3] == 1) {
        answ = 'one hundred'+ " " + answ;
        } else {
        if (str[l-3] == 2) {
            answ = 'two hundred'+ " " + answ;
        } else {
            if (str[l-3] == 3) {
            answ = 'three hundred' + " " + answ;
        } else {
            if (str[l-3] == 4) {
                answ = 'four hundred'+ " " + answ;
                } else {
                if (str[l-3] == 5) {
                    answ = 'five hundred'+ " " + answ;
                } else {
                    if (str[l-3] == 5) {
                    answ = 'five hundred' + " " + answ;
                    } else {
                        if (str[l-3] == 6) {
                            answ = 'six hundred' + " " + answ;
                        } else { 
                            if (str[l-3] == 7) {
                                answ = 'seven hundred' + " " + answ;
                            } else { 
                                if (str[l-3] == 8) {
                                    answ = 'eight hundred'+ " " + answ;
                                } else { 
                                    if (str[l-3] == 9) {
                                        answ = 'nine hundred'+ " " + answ;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
    }  
    if (str === '0') {
        answ = 'zero';
    }
    return answ.trim();
}