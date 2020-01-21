from flask import Flask
import request
import math
import numpy
import os
import random

def gcd(a, b):
    while b!=0:
        a, b = b, a%b
    return a

def decrypt(pk, ciphertext):
    key, n = pk
    plain = [chr( (char ** key) % n) for char in ciphertext]
    return ''.join(plain)

def encrypt(pk, plaintext):
    key, n = pk
    cipher = [(ord(char) ** key) % n for char in plaintext]
    print(cipher)
    return cipher

def get_private_key(e, tot):
    k=1
    while (e*k)%tot != 1 or k == e:
        k+=1
    return k

def get_public_key(tot):
    e=2
    while e < tot and gcd(e, tot)!=1:
        e += 1
    return e

def check_prime(num):

    if num > 1:  
    
        for i in range(2,num):  
            if (num % i) == 0:  
                return False 
        
        return True  

    else:  
        return False

def find_prime(maximum=100):

    while(1):
        prime = random.randint(1, maximum)
         
        if check_prime(prime):
            return prime

def gen_prime_keys(maximum=100):
    p = find_prime(maximum)
    q = find_prime(maximum)
    print("p & q")
    print(p)
    print(q)
    n = p*q
    
    mul = (p-1)*(q-1)

    return n, mul

def gen_publickey(n, mul):

    e = get_public_key(mul)
    print("Public key(n, e):("+str(n)+","+str(e)+")")

    return e

def gen_privatekey(n, e, mul):

    d = get_private_key(e, mul)
    print("Private key(n, d):("+str(n)+","+str(d)+")")

    return d

def gen_encriptkey(e, n, m ):

    encrypted_msg = encrypt((e, n), m)
    return encrypted_msg

def gen_decriptkey(d, n, m):

    return decrypt((d, n),m)

app = Flask(__name__)
# need to implement POST and GET method
@app.route('/make_primekey')
def make_primekey():
    # choose as more as your computing device can possible
    # big number
    # make more security  
    data = request.get_json()    
    maximum = data['prime_maximum']
    
    n, mul = gen_prime_keys(int(maximum))
    
    return [str(n), str(mul)]

@app.route('/make_publickey')
def make_publickey():
    data = request.get_json()
    
    n = data['first_prime_n']
    mul = data['second_prime_mul']

    pub_key = gen_publickey(int(n), int(mul))
    pub_key = [str(i) for i in pub_key]

    return pub_key

@app.route('/make_privatekey')
def make_privatekey():
    data = request.get_json()
    
    n = data['first_prime_n']
    mul = data['second_prime_mul']
    pub_key = data['public_key']
    pub_key= [int(i) for i in pub_key]

    pri_key= gen_privatekey(int(n), pub_key, int(mul))
    pri_key = [str(i) for i in pri_key]

    return pri_key

@app.route('/enc_key')
def enc_key():
    data = request.get_json()
    
    key = data['key_to_encode']
    n = data['first_primeMul_n']
    pub_key = data['public_key']
    pub_key = [int(i) for i in pub_key]

    enc_key = gen_encriptkey(pub_key, int(n), key )
    enc_key = [str(i) for i in enc_key]
    
    return enc_key

@app.route('/dec_key')
def dec_key():
    data = request.get_json()
    
    enc_key = data['key_to_decode']
    enc_key = [int(i) for i in enc_key]
    n = data['first_primeMul_n']
    pri_key = data['private_key']
    pri_key = [int(i) for i in pri_key]

    dec_key = gen_decriptkey(pri_key, int(n), enc_key)

    return dec_key

@app.route('/check_id_key')
def check_device():
    # don't save device_id on server
    # save only public_key on server and device
    # and broadcast the public_key to find what device have the public key
    # that makes double check to make more security
    data = request.get_json()

    dec_key = data['decoded_key']
    device_id = data['device_id']
    
    if device_id != decoded_key:
        return False
    else:   
        return True

if __name__ == '__main__':
    # if you want to run as a server remove comment mark of the line below 
    # app.run(debug=True, port=5000) need to port forwarding to 5000 or any number you picked
    
    # DEMO OF THE ORDER TO EXECUTE
    m = "F2LWQR7FJWLM"

    print("RAW")
    print(m)
    
    print("GET PRIME NUMBERS")
    n, mul = gen_prime_keys(8000)
    public = gen_publickey(n, mul)
    private = gen_privatekey(n, public, mul)

    print("ENC")
    m = gen_encriptkey(public, n, m )

    print("DEC")
    print(gen_decriptkey(private, n, m))
