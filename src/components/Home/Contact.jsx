const Contact = () => {
  return (
    <div className="hero bg-base-200 my-4 w-3/4 mx-auto">
      <div className="hero-content flex-col w-2/4">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-5">Leave Us a Message</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Fist name</span>
              </label>
              <input
                type="name"
                placeholder="first name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Last name</span>
              </label>
              <input
                type="name"
                placeholder="last name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                type="text"
                placeholder="write your message"
                className="input input-bordered p-2 w-[20rem] h-[15rem] resize-none"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
