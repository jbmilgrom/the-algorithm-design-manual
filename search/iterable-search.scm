; Search for an item in a list
(define (iterable-search items is-term?)
  (cond 
    ((null? items) #f)
    ((is-term? (car items)) (car items))
    (else (iterable-search (cdr items) is-term?))))

; TEST

(iterable-search 
  (list 2 5 3 6 2) 
  (lambda (x) (= x 3))) ; 3

(iterable-search 
  (list 2 5 3 6 2) 
  (lambda (x) (= x 7))) ; #f