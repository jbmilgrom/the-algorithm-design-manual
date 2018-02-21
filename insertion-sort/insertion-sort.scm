; Sort implementation with linked-lists that feed items into a new list using insert-into-sorted-list algorithm
; Worst-case complexity: O(n^2)

; alg:
; 1. create empty list - an empty list is sorted by definition
; 2. insert item to list using insert-into-sorted-list algorithm
; 3. repeat for each item until no items are left
; 
; explanation: This is an iterative procedure; the state of the process is maintained by the result list without any deferred operations.
; Ignoring the effect of insert-into-sorted-list, this process is linearly iterative: the number of steps grows linearly with n.
; Including the effect of 
(define (insertion-sort-iterative items)
  (define (iterator result _items)
    (if (null? _items)
      result
      (iterator (insert-into-sorted-list (car _items) result) (cdr _items))))
  (iterator `() items))

; alg:
; 1. insert first item into result of insert-into-sorted-list called on alg((cdr items))

; explanation: This is a recursive process: the state of the process is accrued in deferred applications
; of the `insert-into-sorted-list` compound procedure. Deferred application of insert-into-sorted-list works to ensure
; that items it receives and returns up to the next insert-into-sorted-list is always sorted.
; Ignoring the effect of insert-into-sorted-list, this process is linearly recursive: the number of deferred operations grows linearly with n.
; Including the effect of insert-into-sorted-list, itself linearly recursive, this process is exponentially recursive (i.e tree resursion): the
; number of deferred operations grows exponentially (i.e. n^2) with n.
; 
(define (insertion-sort-recursive items)
  (if (null? items)
    items
    (insert-into-sorted-list (car items) (insertion-sort-recursive (cdr items)))))

; Given a sorted list, insert item and maintain sorted order
; Worst-case complexity: O(n)

; alg: 
; 1. if first item in list is greater than item, append item to beginning of list
; 2. if not, create new list with first item and result of alg((cdr items) item)
; 
; explanation: This is a recursive process; the state of the process is accrued in deferred applications of the `cons` operator,
; with each call to insert-into-sorted-list.
; This process is linearly recursive: the number of deferred operations grow linearly with n.
(define (insert-into-sorted-list item items)
  (cond 
    ((null? items) (cons item `()))
    ((< item (car items)) (cons item items))
    (else (cons (car items) (insert-into-sorted-list (cdr items) item)))))

