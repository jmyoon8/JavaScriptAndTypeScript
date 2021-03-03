class TodoItem{

    //멤버변수에 private, public, protected 같은 접근제어자를 선언할 수 있다.
    // public id:number;
    // public task:String;
    // public complete:boolean;
    public secretId: any;
    
    public secretIdd="boss ";
    
        
    //생성자를 통해 변수를 초기화 할수도 있다 
    //생성자의 파라미터에 접근제어자를 선언하면 프로퍼티로 인정한다.(멤버변수)
    constructor(
            public id: number, 
            public task: String, 
            public complete: boolean=false
        ){
            this.id=id
            this.task=task
            this.complete=complete
        }
    
  public printDetails():void{
       console.log(`아이디 : ${this.id} 태스크 : ${this.task} 컴플리트${this.complete?"complete":"실패"} `)
       this.secretId=12
       const add=(number:number,string:String):number=>{
        
        return 1
       }
       
      
   }
}
export default TodoItem