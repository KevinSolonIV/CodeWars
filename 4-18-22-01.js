function DNAStrand(dna){
    return dna.split('').map(x => {
        switch(x) {
          case 'A':
            return 'T';
            break;
          case 'T':
            return 'A';
            break;
          case 'C':
            return 'G';
            break;
          case 'G':
            return 'C';
            break;
        }
    }).join('');
}
//Notes after seeing other solutions
//1. you can do a replace(/A/g, 't').toUpperCase()
//2. my favorite solution:
function DNAStrand(dna) {
    dna.replace(/[ACGT]/g, m => 'CGAT'['GCTA'.indexOf(m)]);
}

//3. It is also doable with a lookup object as follows:
function DNAStrand(dna) {
    return dna.replace(/./g, function(c) {
        return DNAStrand.pairs[c]
    });
}
  
DNAStrand.pairs = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
}